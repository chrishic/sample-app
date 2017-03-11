var myModule = angular.module('SampleApp',
    [
        'ngRoute',
        'ngMessages',
        'ngAnimate',
        'toaster',
        'SampleApp.Common',
        'SampleApp.Home'
    ]);

myModule.config(function($routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'src/sample-app/home/tmpl/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .otherwise({redirectTo: '/'});

});
