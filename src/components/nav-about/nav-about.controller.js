angular
  .module('troveApp')
  .controller('NavAboutCtrl', NavAboutCtrl);

NavAboutCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function NavAboutCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.readAbout = false;

  vm.showAbout = function() {
    vm.readAbout = true;
  }
  vm.hideAbout = function() {
    vm.readAbout = false;
  }

}
