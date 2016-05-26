(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('nearby', nearby);

function landing() {
  return {
    restrict: 'E',
    templateUrl: 'js/components/nearby/nearby.html',
    controller: 'NearbyCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
