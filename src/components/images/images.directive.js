(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('images', images);

function images() {
  return {
    scope: true,
    restrict: 'E',
    templateUrl: 'components/images/images.view.html',
    controller: 'ImagesCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
