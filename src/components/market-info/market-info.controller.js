angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

MarketInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MarketInfoCtrl($timeout, $window, $rootScope, marketService) {
console.log('market-info');
  var vm = this;

  vm.currMkt;
  vm.currInfo;
  vm.currMktCategories;

  vm.getMarketInfo = function() {
    marketService.getMarketInfo()
    .then( function (result) {
      console.log(result);
      vm.currMkt = result;
      vm.currInfo = result.data.info[0];
      vm.currMktCategories = result.data.categories;
      return result;
    })
    .catch( function (error) {
      console.log(error);
      return error;
    });
  };

  vm.getMarketInfo();


}
