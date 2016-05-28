(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('marketInfo', marketInfo);

function marketInfo() {
  return {
    restrict: 'E',
    templateUrl: 'components/market-info/market-info.view.html',
    controller: 'MarketInfoCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
