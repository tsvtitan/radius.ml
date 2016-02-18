
app.controller('add',['$scope','$element','$timeout',
                      'Dictionary','Loader',
                      function($scope,$element,$timeout,
                               Dictionary,Loader) {
   
  $scope.dic = Dictionary.dic($element);   
  
  Loader.show($scope);
  
  $timeout(function(){
    
    Loader.hide();
    //$state.go('profile');
  },1000);
}]);