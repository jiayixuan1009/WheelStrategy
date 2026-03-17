#!/usr/bin/env bash
# 在服务器上以 root 或 sudo 用户执行，将站点目录更新为 GitHub 最新 main。
# 用法: sudo bash server-update.sh
#       或: sudo bash server-update.sh /var/www/wheel
set -euo pipefail
WHEEL="${1:-/var/www/wheel}"
if [[ -d "${WHEEL}/.git" ]]; then
  cd "${WHEEL}"
  git fetch origin
  git reset --hard origin/main
  chown -R www-data:www-data . 2>/dev/null || chown -R nginx:nginx . 2>/dev/null || true
  echo "OK: ${WHEEL} 已更新为 origin/main"
else
  echo "未找到 ${WHEEL}/.git。首次部署请执行："
  echo "  mkdir -p /var/www && cd /var/www"
  echo "  git clone https://github.com/jiayixuan1009/WheelStrategy.git wheel"
  echo "  chown -R www-data:www-data wheel"
  exit 1
fi
