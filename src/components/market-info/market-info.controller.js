angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

MarketInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MarketInfoCtrl($timeout, $window, $rootScope, marketService) {
console.log('market-info');
  var vm = this;
  
  vm.getMarketInfo = function() {
    marketService.getMarketInfo();
  };
  
  vm.getMarketInfo();


}
