angular
  .module('troveApp')
  .service('marketService', marketService);

marketService.$inject = ['$http', '$window', '$rootScope'];

function marketService($http, $window, $rootScope) {
    
  return {
    
    getMarketInfo: function(marketID) {
      $http.get('https://trove-api.herokuapp.com/v1/markets/info')
      .then( function (result) { console.log(result); return result; })
      .catch( function (error) { console.log(error); return error; });
    }
  
  }
  
};