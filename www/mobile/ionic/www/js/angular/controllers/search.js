
app.controller('search',['$scope','$element','$state','$timeout',
                         'Dictionary','Alert','Log','States','Const',
                         'Refresher','InfiniteScroll','Search','Loader',
                         function($scope,$element,$state,$timeout,
                                  Dictionary,Alert,Log,States,Const,
                                  Refresher,InfiniteScroll,Search,Loader) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.service = Search;
  $scope.loader = Loader;
  $scope.string = Search.getString();
  
  $scope.favorites = function() {
    $state.go(States.favorites);
  }
  
  $scope.canMore = function() {
    
    var count = Search.getCount();
    var total = Search.getTotal();
    return (count>0 && count<total);
  }
  
  $scope.more = function(clear) {
    
    var conditions = {
      string: $scope.string,
      from: (clear)?0:Search.getCount(),
      count: Search.getLimit()
    }
    
    Search.get(conditions,function(d){

      if (d.error) Log.error(d.error);
      
      Search.set(d,clear);
      
      Refresher.hide();
      InfiniteScroll.hide();
      Loader.hide();
    });
  }
  
  $scope.refresh = function() {
    
    $scope.more(true);
  }
  
  $scope.clear = function() {
    $scope.string = '';
  }
  
  $scope.search = function() {
    Loader.show();
    $scope.refresh();
  }
  
  
}]);
                                  