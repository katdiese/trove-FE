angular
  .module('troveApp')
  .controller('ImagesCtrl', ImagesCtrl);

ImagesCtrl.$inject = ['$timeout', '$window', '$rootScope', '$scope', 'marketService', 'SocketService'];

function ImagesCtrl($timeout, $window, $rootScope, $scope, marketService, SocketService) {
  
  var vm = this;

  // Hardcoded
  vm.marketImages;

  // Function to get Messages for this market
  vm.getMarketImages = function() {

    marketService.getMarketImages($rootScope.id)

    .then( function(result) { vm.marketImages = result.data.data; })

    .catch( function (error) { return error; })

  }

  // Sockets!
  SocketService.forward('image.new', $scope);
    $scope.$on('socket:image.new', function (ev, result) {
      if (result === $rootScope.id) { vm.getMarketImages(); }
    });

  // Invoke the function that gets the messages on page load
  vm.getMarketImages();

}
