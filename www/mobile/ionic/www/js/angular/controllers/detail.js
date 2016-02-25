
app.controller('detail',['$scope','$element','$stateParams','$state',
                         '$ionicModal',
                         'Dictionary','Detail','Log','Refresher','Loader','Utils','Const','Log','States',
                         function($scope,$element,$stateParams,$state,
                                  $ionicModal, 
                                  Dictionary,Detail,Log,Refresher,Loader,Utils,Const,Log,States) {

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
  
  $scope.$on(Const.eventDestroy,function() {
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
  
  $scope.map = function() {
    
    if ($scope.job) {
      
      var state = $state.is(States.searchDetail)?States.searchDetailMap:States.favoritesDetailMap;
      var params = {
        job: $scope.job 
      };

      $state.go(state,params);
    }
  }
  
  $scope.$on(Const.eventBeforeEnter,function() {
    
    if (!$scope.job) {
      Loader.show($scope);

      $scope.refresh(function(){
        Loader.hide();
      });
    }
  });
  
  
  
}]);