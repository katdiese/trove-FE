angular
  .module('troveApp')
  .controller('NearbyCtrl', NearbyCtrl);

NearbyCtrl.$inject = ['$timeout', '$window', '$rootScope', 'locationService'];

function NearbyCtrl($timeout, $window, $rootScope, locationService) {
  
  var vm = this;
  
  vm.searchRadius = 10;
  
  vm.findNearbyMarkets = function() {
    
    if (typeof($rootScope.lat) === "undefined") { locationService.getLocation() }
                        
    locationService.findNearbyMarkets(39.7558119, -104.96809139999999, 10)
    
    .then( function (result) { console.log(result); })
    
    .catch( function (error) { console.log(error); return error; })
    
  }
  
  vm.findNearbyMarkets();
  
}
