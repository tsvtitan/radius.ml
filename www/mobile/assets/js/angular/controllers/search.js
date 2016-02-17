
app.controller('search',['$scope','$element','$state','$timeout',
                         'Dictionary','Alert','Log','States','Const',
                         'Refresher','InfiniteScroll','Search',
                         function($scope,$element,$state,$timeout,
                                  Dictionary,Alert,Log,States,Const,
                                  Refresher,InfiniteScroll,Search) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.service = Search;
  
  $scope.details = function(d) {
    $state.go(States.details,{item:d});
  }
  
  $scope.favorites = function() {
    $state.go(States.favorites);
  }
  
  $scope.canMore = function() {
    
    var count = Search.getCount();
    var total = Search.getTotal();
    return (count>0 && count<total);
  }
  
  $scope.more = function(clear) {
    
    Search.get({from:(clear)?0:Search.getCount(),count:Search.getLimit()},function(d){

      if (d.error) Log.error(d.error);
      
      Search.set(d,clear);
      
      Refresher.hide();
      InfiniteScroll.hide();
    });
  }
  
  $scope.refresh = function() {
    
    $scope.more(true);
  };
  
}]);
                                  