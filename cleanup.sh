#!/bin/bash

# 배포 파일이 저장된 디렉터리 경로
DEPLOYMENT_ROOT="/opt/codedeploy-agent/deployment-root"

# 용량이 가장 큰 배포 파일 경로
LARGEST_DIR=$(sudo du -h ${DEPLOYMENT_ROOT} --max-depth=1 | sort -rh | grep -v "^${DEPLOYMENT_ROOT}$" | head -1 | awk '{print $2}')

# 삭제할 디렉토리가 있는지 확인
if [ -z "$LARGEST_DIR" ]; then
  echo "> 삭제할 디렉터리 없음"
  exit 1
fi

echo "> 용량이 가장 큰 디렉터리: $LARGEST_DIR"

sudo rm -rf "$LARGEST_DIR"

echo "> 삭제 완료: $LARGEST_DIR"