FROM node:7.4

RUN apt-get update && apt-get install -y libpq-dev

WORKDIR /var/www/sample-app/api-service

# First copy Makefile and package.json files so that we can cache dependencies separate from source code.
# By doing so, we won't have to rebuild layers with dependencies when source code changes occur.

ADD Makefile /var/www/sample-app/api-service/
ADD package.json /var/www/sample-app/api-service/
ADD server/package.json /var/www/sample-app/api-service/server/

# Build dependencies
RUN make

# Done building dependency layers...

# Now add the entire source code tree
ADD . /var/www/sample-app/api-service

# Lint
RUN npm run lint

EXPOSE 80

CMD ./run.sh
