
app.controller('details',['$scope','$element','$timeout','$state',
                          'Dictionary','Loading', 
                          function($scope,$element,$timeout,$state,
                                   Dictionary,Loading) {

  $scope.dic = Dictionary.dic($element);                                 
  
  Loading.show($scope);
  
  $timeout(function(){
    
    Loading.hide();
    //$state.go('profile');
  },1000);
                           
                           
}]);