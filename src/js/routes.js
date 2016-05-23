(function() {

  'use strict';
  console.log('main page');

  angular
    .module('troveApp')
    .config(appConfig)

    appConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<h1>Welcome to Trove!</h1>'
    })
    .otherwise({redirectTo: '/'});
  }

  $locationProvider.html5Mode(true);

})();