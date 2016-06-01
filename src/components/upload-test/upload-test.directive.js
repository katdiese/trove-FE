(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('uploadTest', uploadTest);

function uploadTest() {
  return {
    restrict: 'E',
    templateUrl: 'components/upload-test/upload-test.view.html',
    controller: 'uploadCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
