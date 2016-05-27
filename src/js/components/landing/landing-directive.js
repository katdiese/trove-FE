(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('landing', landing);

function landing() {
  return {
    restrict: 'E',
    templateUrl: 'js/components/landing/landing.html',
    controller: 'LandingCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
