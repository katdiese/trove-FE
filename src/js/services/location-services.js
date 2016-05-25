angular
  .module('troveApp')
  .service('locationService', locationService);

locationService.$inject = ['$http', '$window', '$location', '$rootScope'];

function locationService($http, $window, $location, $rootScope) {
    
  return {
    
    getLocation: function() {
      return $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDfPKtoUzLSeIRei104h3GCYjBe1th2vSs');
    }
  
  }
  
};