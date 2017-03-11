angular.module('SampleApp.Common')
    .service('ErrorService', function(toaster) {

        var service = this;

        service.handleError = function(reason, defaultMsg) {

            var message = defaultMsg || 'An error occurred.';

            if (reason && reason.data && reason.data.Error && typeof reason.data.Error === 'object') {
                message = reason.data.Error.message;
            }

            toaster.pop({type: "error", "body": message, "showCloseButton": true, "timeout": 0});

        };

    });
