angular
  .module('troveApp')
  .controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['$timeout','$location', '$window', '$rootScope', 'locationService'];

function LandingCtrl($timeout, $location, $window, $rootScope, locationService) {

  var vm = this;

  vm.zip;

  vm.clearZip = function() {
    locationService.searchZip = "";
    $location.path('/nearby');
  }

  vm.assignSearchZip = function() {
    locationService.searchZip = vm.zip;
    $location.path('/nearby');
  }

  vm.getLocation = function () {
    locationService.getLocation();
  };

  vm.getLocation();


}
