angular
  .module('troveApp')
  .controller('ImagesCtrl', ImagesCtrl);

ImagesCtrl.$inject = ['$timeout', '$window', '$rootScope', '$scope', 'marketService', 'Upload', 'SocketService'];

function ImagesCtrl($timeout, $window, $rootScope, $scope, marketService, Upload, SocketService) {

  var vm = this;

  // Hardcoded
  vm.marketImages;

  // Function to get Messages for this market
  vm.getMarketImages = function() {
    console.log("getting market images");

    marketService.getMarketImages($rootScope.id)

    .then( function(result) { vm.marketImages = result.data.data; })

    .catch( function (error) { return error; })

  }

  // Sockets!
  SocketService.forward('image.new', $scope);
    $scope.$on('socket:image.new', function (ev, result) {
      console.log("socket fired", result);
      console.log('root id', $rootScope.id);
      if (result == $rootScope.id) { console.log("match");vm.getMarketImages(); }
    });

  //stuff from uploads controller
  vm.marketID = $rootScope.id || 2713;

    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    }

    vm.upload = function (file) {
        Upload.upload({
            url:  'https://trove-api.herokuapp.com/v1/images'  /*'http://localhost:5000/v1/images'*/, //webAPI exposed to upload the file
            data:{file:file,
                  marketID: vm.marketID
            } //pass file as data, should be user ng-model
        })
        .then(function (resp) { //upload function returns a promise
            console.log(resp)
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                console.log(resp);
//                 $window.alert('an error occured');
            }
        }, function (resp) { //catch error
//             console.log('Error status: ' + resp.status);
//             $window.alert('Error status: ' + resp.status);
        }, function (evt) {
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
    //end uploads stuff

  // Invoke the function that gets the messages on page load
  vm.getMarketImages();

}
