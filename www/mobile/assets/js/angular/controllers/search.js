
app.controller('search',['$scope','$element','$timeout','$state',
                         'Dictionary','Alert','Const','Log','Spinner','Navbar', 
                         function($scope,$element,$timeout,$state,
                                  Dictionary,Alert,Const,Log,Spinner,Navbar) {
   
  $scope.dic = Dictionary.dic($element);                                 
  
  $scope.title = 'Поиск';
  
  //Navbar.show();
  Spinner.show();
  
  $timeout(function(){
    
    Spinner.hide();
    //$state.go('profile');
  },2000);
                           
                           
}]);
                                  