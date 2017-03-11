# sample-app

## CONFIGURATION

Configuration is controlled via an environment variable, `APP_ENV`.

By default, the supplied `docker-compose.yml` file sets both the client and backend API service to the "development" environment.  To change the environment for one (or both) of the containers, stop the containers, update the APP_ENV value, and restart.


## RUNNING

### Build and start the containers

```
$ docker-compose build
$ docker-compose up
```

You can now access the client by pointing your browser to:

    `http://<DOCKER-MACHINE-IP-ADDR>:8000/`

The backend API service is listening at:

    `http://<DOCKER-MACHINE-IP-ADDR>:8080/`

