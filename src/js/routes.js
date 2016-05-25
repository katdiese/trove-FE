(function() {

  'use strict';
  console.log('main page');

  angular
    .module('troveApp')
    .config(appConfig);

    appConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

  function appConfig($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing></landing>'
    })

    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }



})();
