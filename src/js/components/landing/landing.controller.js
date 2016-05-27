angular
  .module('troveApp')
  .controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['$timeout', '$window', '$rootScope', 'locationService'];

function LandingCtrl($timeout, $window, $rootScope, locationService) {

  var vm = this;

  vm.getLocation = function () {
    locationService.getLocation();
  };

  vm.getLocation();


}
