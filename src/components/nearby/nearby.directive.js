(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('nearby', nearby);

function nearby() {
  return {
    restrict: 'E',
    templateUrl: 'components/nearby/nearby.view.html',
    controller: 'NearbyCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
