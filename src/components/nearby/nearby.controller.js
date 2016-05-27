angular
  .module('troveApp')
  .controller('NearbyCtrl', NearbyCtrl);

NearbyCtrl.$inject = ['$timeout', '$window', '$rootScope', 'locationService'];

function NearbyCtrl($timeout, $window, $rootScope, locationService) {
  
  var vm = this;
  
  vm.nearbyMarkets;
  
  vm.searchRadius = 10;
    
  vm.findNearbyMarkets = function() {
    
    if (typeof($rootScope.lat) === "undefined") { locationService.getLocation() }
                        
    locationService.findNearbyMarkets($rootScope.lat, $rootScope.lng, vm.searchRadius)
    
    .then( function (result) { vm.nearbyMarkets = result.data.nearbyMarkets; console.log(result); })
    
    .catch( function (error) { return error; })
    
  }
  
  vm.findNearbyMarkets();
  
}
