(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('navAbout', navAbout);

function navAbout() {
  return {
    restrict: 'E',
    templateUrl: 'components/nav-about/nav-about.view.html',
    controller: 'NavAboutCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
