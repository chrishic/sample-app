angular.module('SampleApp.Common')
    .service('EndpointService', function(ENV) {

        var service = this;

        var environments = {
            "prod": {
                "URI": "http://sample-app-service.com",
                "root": "/"
            },
            "staging": {
                "URI": "http://stg.sample-app-service.com",
                "root": "/"
            },
            "development": {
                "URI": "http://localhost:8080",
                "root": "/"
            },
            "default": {
                "URI": "http://localhost:8080",
                "root": "/"
            }
        };

        var getEndpointMap = function() {
            var env = ENV || 'default';
            return environments[env];
        };

        //  Base URL that does not require authentication
        service.getBaseUrl = function() {
            var endpointMap = getEndpointMap();
            return endpointMap.URI + endpointMap.root;
        };

    });
