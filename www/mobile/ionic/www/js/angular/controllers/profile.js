
app.controller('profile',['$scope','$element','$timeout',
                          '$ionicModal',
                          'Dictionary','Loader','Profile','Refresher','Log',
                          function($scope,$element,$timeout,
                                   $ionicModal,
                                   Dictionary,Loader,Profile,Refresher,Log) {
   
  $scope.dic = Dictionary.dic($element);   
  $scope.user = Profile.getUser();
  
  $ionicModal.fromTemplateUrl('profile-image.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
    
  $scope.showImage = function() {
    $scope.modal.show();
  }
  
  $scope.hideImage = function() {
    $scope.modal.hide();
  }
  
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
  $scope.refresh = function() {
    
    Profile.get(function(d){
    
      if (d.error) Log.error(d.error);
      
      Profile.set(d);
      $scope.user = Profile.getUser();
      Refresher.hide();
    });
  }
  
}]);