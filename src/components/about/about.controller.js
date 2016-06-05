angular
  .module('troveApp')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function AboutCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.readAbout = false;

  vm.showAbout = function() {
    vm.readAbout = true;
  }
  vm.hideAbout = function() {
    vm.readAbout = false;
  }

}
