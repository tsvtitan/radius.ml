
app.controller('stats',['$scope','$element','$timeout','$state',
                        'Dictionary','Alert','Const','Log','Navbar', 
                        function($scope,$element,$timeout,$state,
                                 Dictionary,Alert,Const,Log,Navbar) {
   
  $scope.dic = Dictionary.dic($element);                                 
  
  $scope.title = 'Поиск';
  
  
                           
                           
}]);