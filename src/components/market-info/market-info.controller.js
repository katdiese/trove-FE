angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

MarketInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MarketInfoCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.currMkt;
  vm.currInfo;
  vm.currMktCategories;

  console.log($rootScope.id);

  vm.getMarketInfo = function() {
    marketService.getMarketInfo()
    .then( function (result) {
      vm.currMkt = result;
      vm.currInfo = result.data.info[0];
      vm.currCategories = result.data.categories;
      return result;
    })
    .catch( function (error) {
      return error;
    });
  };

  vm.getMarketInfo();


}
