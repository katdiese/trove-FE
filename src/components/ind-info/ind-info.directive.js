(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('indInfo', indInfo);

function indInfo() {
  return {
    restrict: 'E',
    templateUrl: 'components/ind-info/ind-info.view.html',
    controller: 'IndInfoCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
