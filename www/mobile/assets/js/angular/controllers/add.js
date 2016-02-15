
app.controller('add',['$scope','$element','$timeout',
                      'Dictionary','Loading',
                      function($scope,$element,$timeout,
                               Dictionary,Loading) {
   
  $scope.dic = Dictionary.dic($element);   
  
  Loading.show($scope);
  
  $timeout(function(){
    
    Loading.hide();
    //$state.go('profile');
  },1000);
}]);