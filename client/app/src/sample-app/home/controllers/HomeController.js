angular.module('SampleApp.Home')
    .controller('HomeCtrl', function($rootScope, $location, toaster, StatusModel, EndpointService, ErrorService) {

        var home = this;

        home.status = {};
        home.endpoint = EndpointService.getBaseUrl();

        var getStatus = function() {

            StatusModel.get()
                .then(function(response) {
                    if (response && response.data && typeof response.data === 'object') {
                        home.status = response.data;
                    }
                },
                function(reason) {
                    ErrorService.handleError(reason, 'Unable to retrieve server status');
                });

        };

        (function() {
            //  page initialization
            getStatus();
        })();

    });
