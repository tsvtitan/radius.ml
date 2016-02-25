
app.controller('map',['$scope','$element','$state','$stateParams',
                      'Dictionary','Alert','Loader','Geolocation','Const','Profile',
                      function($scope,$element,$state,$stateParams,
                               Dictionary,Alert,Loader,Geolocation,Const,Profile) {
   
  $scope.dic = Dictionary.dic($element);
  $scope.job = $stateParams.job;
  $scope.profile = Profile;
  $scope.location = Geolocation.location;
  /*$scope.map = false;
  
  Loader.show($scope);
  
  $scope.$on(Const.eventMapInitialized,function(event,map){
    $scope.map = map;
    Loader.hide();
  });*/
  
  /*$scope.$on(Const.eventBeforeEnter,function(){
    
    Loader.show($scope);
  
    $scope.refresh(function(){
      Loader.hide();
    });
    
  });*/
  
}]);  