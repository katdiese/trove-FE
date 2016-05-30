(function(){
  'use strict';

  angular
  .module('troveApp')
  .directive('messages', messages);

function messages() {
  return {
    restrict: 'E',
    templateUrl: 'components/messages/messages.view.html',
    controller: 'MessagesCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
