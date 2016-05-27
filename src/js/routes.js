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
    
    .when('/nearby', {
      template: '<nearby></nearby>'
    })

    .otherwise({redirectTo: '/'});
    
    $locationProvider.html5Mode(true);

/* 
 * Debugging CORS issues 
 */  
//     $httpProvider.defaults.useXDomain = true;
//     $httpProvider.defaults.withCredentials = true;
//     delete $httpProvider.defaults.headers.common["X-Requested-With"];
//     $httpProvider.defaults.headers.common["Accept"] = "application/json";
//     $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

  }

})();