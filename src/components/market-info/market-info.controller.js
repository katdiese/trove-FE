angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

MarketInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'locationService'];

function MarketInfoCtrl($timeout, $window, $rootScope, locationService) {
console.log('market-info');
  var vm = this;

//   vm.getLocation = function () {
//     locationService.getLocation();
//   };
// 
//   vm.getLocation();


}
