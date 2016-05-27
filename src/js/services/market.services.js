angular
  .module('troveApp')
  .service('marketService', marketService);

marketService.$inject = ['$http', '$window', '$market', '$rootScope'];

function marketService($http, $window, $market, $rootScope) {
    
  return {
    
    getMarketInfo: function(marketID) {
      $http.get('https://trove-api.herokuapp.com/v1/markets/' + marketID + '')
      .then( function (result) { return result; })
      .catch( function (error) { return error; });
    }
  
  }
  
};