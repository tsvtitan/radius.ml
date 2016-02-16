
app.controller('search',['$scope','$element','$state','$timeout',
                         'Dictionary','Alert','Refresher','States','Search','Log','Loading', 
                         function($scope,$element,$state,$timeout,
                                  Dictionary,Alert,Refresher,States,Search,Log,Loading) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.search = Search;
  $scope.total = 50;
  
  $scope.details = function() {
    $state.go(States.details);
  }
  
  $scope.favorites = function() {
    $state.go(States.favorites);
  }  

  $scope.refresh = function() {
    
    Search.getData({},function(d){
        
      if (d.error) Log.error(d.error);
      
      $scope.total = 10;
      Search.setData(d.data);
      Refresher.hide();
    });
  };
  
  $scope.more = function() {
    $scope.total += 0;
  }


}]);
                                  