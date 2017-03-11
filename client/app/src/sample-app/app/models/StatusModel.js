angular.module('SampleApp.Common')
    .service('StatusModel', function($http, EndpointService) {

        var service = this;

        service.get = function() {

            var baseUrl = EndpointService.getBaseUrl();

            var opts = {
                'method': 'GET',
                'url': baseUrl + 'status'
            };

            return $http(opts);

        };

    });
