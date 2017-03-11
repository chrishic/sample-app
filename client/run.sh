#!/bin/sh
set -e

export APP_ENV="${APP_ENV:-default}"
export NODE_ENV=$APP_ENV

SERVICE_NAME="sample-app"
LOG_PATH="/var/www/$SERVICE_NAME/shared/logs/nginx"

# Create directory structure for log files
mkdir -p $LOG_PATH

# Kick out constant for Angular app to determine environment
echo "angular.module('SampleApp.Common').constant('ENV', '${APP_ENV}');" > /var/www/$SERVICE_NAME/client/app/src/sample-app/app/services/Env.js

# Start nginx
nginx -c /var/www/$SERVICE_NAME/client/nginx.cfg
