
app.controller('detail',['$scope','$element','$stateParams',
                         '$ionicModal',
                         'Dictionary','Detail','Log','Refresher','Loader','Utils',
                         function($scope,$element,$stateParams,
                                  $ionicModal, 
                                  Dictionary,Detail,Log,Refresher,Loader,Utils) {

  $scope.dic = Dictionary.dic($element);                                 
  $scope.job = false;
  
  $ionicModal.fromTemplateUrl('detail-image.html',{
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

  $scope.refresh = function(result) {
    
    Detail.get($stateParams,function(d){
    
      if (d.error) Log.error(d.error);

      $scope.job = d.data;
      Refresher.hide();
      
      if (Utils.isFunction(result)) result();
    });
  }
  
  Loader.show($scope);
  $scope.refresh(function(){
    Loader.hide();
  });
  
}]);