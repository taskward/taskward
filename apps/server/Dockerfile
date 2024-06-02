FROM node:20-alpine AS base

WORKDIR /app

FROM base AS builder

COPY package*.json ./
COPY tsconfig*.json ./
COPY prisma ./prisma/

RUN npm install --only=production

RUN cp -R node_modules node_modules_production

RUN npm install

COPY ./src ./src

RUN npm run build

FROM builder AS release

COPY --from=builder /app/node_modules_production ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma

USER node

EXPOSE 8080

CMD ["npm", "run", "start:migrate:prod"]
