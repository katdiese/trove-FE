angular
  .module('troveApp')
  .controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['$timeout', '$window', '$rootScope', 'locationService'];

function LandingCtrl($timeout, $window, $rootScope, locationService) {
  
  var vm = this;
  
  vm.getLocation = function () {
    locationService.getLocation()
    .then( function (result) { $rootScope.lat = result.data.location.lat;
                               $rootScope.lng = result.data.location.lng;  })
    .catch( function (error) { return error; })
    
  };
  
  vm.getLocation();

}
