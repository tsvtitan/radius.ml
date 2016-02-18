
app.controller('profile',['$scope','$element','$timeout',
                          'Dictionary','Loader',
                          function($scope,$element,$timeout,
                                   Dictionary,Loader) {
   
  $scope.dic = Dictionary.dic($element);                                 

  Loader.show($scope);
  
  $timeout(function(){
    
    Loader.hide();
   // Spinner.hide();
    //$state.go('profile');
  },3000);
  
}]);