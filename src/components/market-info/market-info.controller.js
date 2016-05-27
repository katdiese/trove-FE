angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

LandingCtrl.$inject = ['$timeout', '$window', '$rootScope', 'locationService'];

function MarketInfoCtrl($timeout, $window, $rootScope, locationService) {

  var vm = this;

  vm.getLocation = function () {
    locationService.getLocation();
  };

  vm.getLocation();


}
