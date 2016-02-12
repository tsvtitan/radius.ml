
app.controller('profile',['$scope','$element','$timeout','$state',
                          'Dictionary','Alert','Const','Log','Spinner','Navbar', 
                          function($scope,$element,$timeout,$state,
                                   Dictionary,Alert,Const,Log,Spinner,Navbar) {
   
  $scope.dic = Dictionary.dic($element);                                 
  
  Spinner.show();
  
  $timeout(function(){
    
    Spinner.hide();
    //$state.go('profile');
  },1000);
                           
                           
}]);