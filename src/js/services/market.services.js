angular
  .module('troveApp')
  .service('marketService', marketService);

marketService.$inject = ['$http', '$window', '$rootScope'];

function marketService($http, $window, $rootScope) {

  return {

    getMarketInfo: function(marketID) {
      return $http.get('https://trove-api.herokuapp.com/v1/markets/info');
    }

  }

};