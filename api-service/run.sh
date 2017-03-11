#!/bin/bash
set -e

export APP_ENV="${APP_ENV:-default}"
export NODE_ENV=$APP_ENV

SERVICE_NAME="sample-app"
LOG_PATH="/var/www/$SERVICE_NAME/shared/logs"

# Create directory structure for log files
mkdir -p $LOG_PATH

APP_LOG_FILENAME="$LOG_PATH/$SERVICE_NAME.log"

# If there is an existing log file, save it (by renaming)
if [ -f "$APP_LOG_FILENAME" ]; then
    # Get the current date/time stamp
    d=$(date '+%y-%m-%d_%H-%M-%S')
    mv $APP_LOG_FILENAME $LOG_PATH/$SERVICE_NAME_$d.log
fi

# Start our Node.js RESTful API service
cd /var/www/$SERVICE_NAME/api-service/server
node index.js --name=$SERVICE_NAME >> $APP_LOG_FILENAME 2>&1
