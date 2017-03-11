angular.module('SampleApp.Common')
    .controller('MainCtrl', function($scope, ENV) {

        var main = this;

        main.env = ENV;

    });
