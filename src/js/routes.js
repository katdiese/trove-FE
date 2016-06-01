(function() {

  'use strict';

  angular
    .module('troveApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

  function appConfig($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing></landing>'
    })

    .when('/nearby', {
      template: '<nearby></nearby>'
    })

    .when('/info', {
      template: '<market-info></market-info>'
    })

    .when('/upload-test', {
      template: '<upload-test></upload-test>'
    })

    .otherwise({redirectTo: '/'});

//     $locationProvider.html5Mode(true);

  }

})();