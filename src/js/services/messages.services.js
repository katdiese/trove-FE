(function () {
  
  'use strict';
  
  angular
    .module('troveApp')
    .service('messageService', messageService)
    .service('SocketService', SocketService);
  
  messageService.$inject = ['$http', '$window', '$rootScope'];
  
  function messageService($http, $window, $rootScope) {
  
    return {
  
      getMarketMessages: function(id) {
        return $http.get('https://trove-api.herokuapp.com/v1/messages?id=' + id + '');
      },
  
      postMessage: function(id, payload) {
        return $http.post('https://trove-api.herokuapp.com/v1/messages?id=' + id + '', payload);
      }
      
    }
  
  }
  
  SocketService.$inject = ['socketFactory'];
  
  function SocketService (socketFactory) {
    
    var myIoSocket = io.connect('http://trove-api.herokuapp.com/');
    
    return socketFactory({ioSocket: myIoSocket});
  }

})();