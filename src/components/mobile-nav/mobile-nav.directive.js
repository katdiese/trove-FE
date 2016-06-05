(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('mobileNav', mobileNav);

function mobileNav() {
  return {
    restrict: 'E',
    templateUrl: 'components/mobile-nav/mobile-nav.view.html',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
