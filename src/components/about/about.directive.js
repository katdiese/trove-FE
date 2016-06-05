(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('about', about);

function about() {
  return {
    restrict: 'E',
    templateUrl: 'components/about/about.view.html',
    controller: 'AboutCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
