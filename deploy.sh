#!/bin/bash

# 배포된 프로젝트 경로
REPOSITORY=/home/ubuntu/PES-FE

# 프로젝트 경로로 이동
cd $REPOSITORY

# 의존성 설치
npm install --legacy-peer-deps

# 빌드
npm run build

# Nginx 설정
sudo cp -r build/* /var/www/html/
sudo systemctl restart nginx

echo "> 배포 완료"
