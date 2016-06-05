angular
  .module('troveApp')
  .controller('IndInfoCtrl', IndInfoCtrl);

IndInfoCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function IndInfoCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.currMkt;
  vm.currInfo;
  vm.currCategories;

  vm.hideCategories = true;

  vm.getMarketInfo = function() {

    marketService.getMarketInfo($rootScope.id, $rootScope.fmid)
    // marketService.getMarketInfo(7894, 1011055)
    .then( function (result) {
      vm.currMkt = result;
      vm.currInfo = result.data.info[0];
      vm.currCategories = result.data.categories;
      marketService.categories = vm.currCategories;
      return result;
    })
    .catch( function (error) {
      return error;
    });
  };

  vm.getMarketInfo();


}
