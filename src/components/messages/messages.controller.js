angular
  .module('troveApp')
  .controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$timeout', '$window', '$rootScope', '$scope', 'messageService', 'SocketService'];

function MessagesCtrl($timeout, $window, $rootScope, $scope, messageService, SocketService) {
  var vm = this;

  vm.currMsgs;
  vm.message;
  vm.currCategories;

  vm.hideCategories = true;

  vm.getMarketMessages = function() {
    messageService.getMarketMessages($rootScope.id)
    .then( function(result) {
      vm.currMsgs = result.data.data;
      vm.currCategories = messageService.categories;
    })
  }
  
  
  vm.postMessage = function() {
    // Add the market id to the message object
    vm.message.market_id = $rootScope.id;
    
    messageService.postMessage($rootScope.id, vm.message)
    
    .then( function (result) { return result; })
    
    .catch( function (error) { return error; })
    
  }
  
  SocketService.forward('message.new', $scope);
    $scope.$on('socket:message.new', function (ev, result) {
      console.log(result);
    });


  vm.toggleFilter = function() {
    vm.hideCategories = !vm.hideCategories;
  }

  vm.getMarketMessages();


}
