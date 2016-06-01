(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('upload', upload);

function upload() {
  return {
    restrict: 'E',
    templateUrl: 'components/upload/upload.view.html',
    controller: 'MyCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
