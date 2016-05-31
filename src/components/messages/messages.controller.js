angular
  .module('troveApp')
  .controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$timeout', '$window', '$rootScope', '$scope', 'messageService', 'SocketService'];

function MessagesCtrl($timeout, $window, $rootScope, $scope, messageService, SocketService) {
  var vm = this;

  // Declare variables
  vm.currMsgs;
  vm.message;
  vm.currCategories;
  
  // Default value for hide categories.
  vm.hideCategories = true;

  // Function to get Messages for this market
  vm.getMarketMessages = function() {
    
    // Use the message service to make the API call
    messageService.getMarketMessages($rootScope.id)
    
    .then( function(result) {
      // Save the messages and the categories returned from the API call
      vm.currMsgs = result.data.data;
      vm.currCategories = messageService.categories;
    })
    
    .catch( function (error) { return error; })
  
  }
  
  // Post messages to the database
  vm.postMessage = function() {
    // Add the market id to the message object
    vm.message.market_id = $rootScope.id;
        
    // Use the message service to make the API call
    messageService.postMessage($rootScope.id, vm.message)
    
    .then( function (result) { vm.message = {};
                               return result; })
    
    .catch( function (error) { return error; })
    
  }
  
  // Sockets!
  SocketService.forward('message.new', $scope);
    $scope.$on('socket:message.new', function (ev, result) {
      if (result === $rootScope.id) { vm.getMarketMessages(); }
    });

  
  // Function to change the boolean value for hideCaegories
  vm.toggleFilter = function() {
    vm.hideCategories = !vm.hideCategories;
  }

  // Invoke the function that gets the messages on page load
  vm.getMarketMessages();

}
