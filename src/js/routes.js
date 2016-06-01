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

    .when('/upload', {
      template: '<upload></upload>'
    })

    .otherwise({redirectTo: '/'});

//     $locationProvider.html5Mode(true);

  }

})();