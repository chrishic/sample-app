angular.module('SampleApp.Common')
    .service('UtilService', function() {

        var service = this;

        service.stringify = function(obj) {

            var pairs = [];

            var keys = Object.keys(obj);
            for (var i=0; i < keys.length; i++) {
                var pairStr = encodeURIComponent(keys[i]) + "=" + encodeURIComponent(obj[keys[i]]);
                pairs.push(pairStr);
            }

            return pairs.join('&');

        };

    });



