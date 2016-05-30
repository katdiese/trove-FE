angular
  .module('troveApp')
  .controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MessagesCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.currMsg;

  vm.hideCategories = true;

  vm.getMarketMessages = function() {
    marketService.getMarketMessages($rootScope.id)
    .then( function(result) {
      vm.currMsg = result.data.data;
      console.log('all messages', vm.currMsg);
    } )
  }

  vm.toggleFilter = function() {
    vm.hideCategories = !vm.hideCategories;
  }

  vm.getMarketMessages();


}
