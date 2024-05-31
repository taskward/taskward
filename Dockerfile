# syntax=docker/dockerfile:1.4

FROM node:20-alpine AS base
ENV CI=true
ENV PORT=4070
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
COPY . ./code
WORKDIR /code
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm -F @taskward/admin build

FROM builder as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF
RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
COPY --from=gloursdocker/docker / /
CMD [ "pnpm", "start" ]

FROM nginx:1.13-alpine
COPY --from=builder /code/apps/admin/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
