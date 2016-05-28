angular
  .module('troveApp')
  .controller('MarketInfoCtrl', MarketInfoCtrl);

MarketInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MarketInfoCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.currMkt;
  vm.currInfo;
  vm.currCategories;

  console.log($rootScope.id);

  vm.getMarketInfo = function() {
    marketService.getMarketInfo($rootScope.id, $rootScope.fmid)
    .then( function (result) {
      console.log(result);
      vm.currMkt = result;
      vm.currInfo = result.data.info[0];
      vm.currCategories = result.data.categories;
      return result;
    })
    .catch( function (error) {
      return error;
    });
  };

  vm.hideCategories = true;

  vm.toggleFilter = function() {
    vm.hideCategories = !vm.hideCategories;
  }

  vm.getMarketInfo();


}
