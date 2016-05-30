angular
  .module('troveApp')
  .controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$timeout', '$window', '$rootScope', 'marketService'];

function MessagesCtrl($timeout, $window, $rootScope, marketService) {
  var vm = this;

  vm.currMsgs;
  vm.message;
  vm.currCategories;

  vm.hideCategories = true;

  vm.getMarketMessages = function() {
    marketService.getMarketMessages($rootScope.id)
    .then( function(result) {
      vm.currMsgs = result.data.data;
      vm.currCategories = marketService.categories;
    })
  }
  
  
  vm.postMessage = function() {
    // Add the market id to the message object
    vm.message.market_id = $rootScope.id;
    
    marketService.postMessage($rootScope.id, vm.message)
    
    .then( function (result) { console.log('result', result); })
    
    .catch( function (error) { console.log('error', error);return error; })
    
  }

  vm.toggleFilter = function() {
    vm.hideCategories = !vm.hideCategories;
  }

  vm.getMarketMessages();


}
