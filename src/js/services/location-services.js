angular
  .module('troveApp')
  .service('locationService', locationService);

locationService.$inject = ['$http', '$window', '$location', '$rootScope'];

function locationService($http, $window, $location, $rootScope) {
    
  return {
    
    getLocation: function() {
      $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDfPKtoUzLSeIRei104h3GCYjBe1th2vSs')
      .then( function (result) { $rootScope.lat = result.data.location.lat;
                                 $rootScope.lng = result.data.location.lng;  })
      .catch( function (error) { return error; });
    },
    
    findNearbyMarkets: function(lat, lng, searchRadius) {
      return $http.get('https://trove-api.herokuapp.com/v1/markets/nearby?lat=' + lat + '&lng=' + lng + '&searchRadius=' + searchRadius + '')
    }
  
  }
  
};