#!/bin/bash

set -o allexport
source apps/admin/.env.production
set +o allexport

pnpm i
pnpm build:packages
pnpm -F admin build:prod

echo "正在上传静态资源至 $SERVER_IP"

tmp_file=$(mktemp)

scp -r apps/admin/dist "$SERVER_USER"@"$SERVER_IP":/usr/share/nginx/html/taskward/ > "$tmp_file" 2>&1

if [ $? -eq 0 ]; then
  echo "成功部署至 $SERVER_IP"
else
  echo "部署失败："
  cat "$tmp_file"
  echo "请检查日志并重试"
fi

rm "$tmp_file"
