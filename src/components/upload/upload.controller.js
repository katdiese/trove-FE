angular
  .module('troveApp')
  .controller('MyCtrl', MyCtrl);

  MyCtrl.$inject = ['Upload','$window', '$rootScope']

  function MyCtrl(Upload,$window, $rootScope) {

    var vm = this;
    
    vm.marketID = $rootScope.id || 2713;
        
    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    }

    vm.upload = function (file) {
        Upload.upload({
            url: /* 'https://trove-api.herokuapp.com/v1/upload' */ 'http://localhost:5000/v1/upload', //webAPI exposed to upload the file
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
  }

