
app.controller('search',['$scope','$element','$timeout','$state',
                         'Dictionary','Alert','Const','Log','Spinner','Navbar','States', 
                         function($scope,$element,$timeout,$state,
                                  Dictionary,Alert,Const,Log,Spinner,Navbar,States) {
   
  $scope.dic = Dictionary.dic($element);                                 
  
  $scope.title = 'Поиск';
  
  //Navbar.show();
  Spinner.show();
  
  $timeout(function(){
    
    Spinner.hide();
    //$state.go('profile');
  },1000);
  
  
  $scope.details = function() {
    $state.go(States.details);
  }
                           
                           
}]);
                                  