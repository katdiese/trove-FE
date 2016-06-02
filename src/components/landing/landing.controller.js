angular
  .module('troveApp')
  .controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['$timeout','$location', '$window', '$rootScope', 'locationService'];

function LandingCtrl($timeout, $location, $window, $rootScope, locationService) {

  var vm = this;

  vm.zip;
  vm.show = true;

  vm.clearZip = function() {
    locationService.searchZip = "";
    $location.path('/nearby');
  }

  vm.assignSearchZip = function() {
    locationService.searchZip = vm.zip;
    $location.path('/nearby');
  }

  vm.toggleShow = function() {
    vm.show = !vm.show;
  }

  vm.getLocation = function () {
    locationService.getLocation();
  };

  vm.getLocation();


}
