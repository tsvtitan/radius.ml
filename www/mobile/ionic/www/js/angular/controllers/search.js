
app.controller('search',['$scope','$element','$state','$timeout',
                         'Dictionary','Alert','Refresher','States','Search',
                         'Log','Boot','InfiniteScroll','Const',
                         function($scope,$element,$state,$timeout,
                                  Dictionary,Alert,Refresher,States,Search,
                                  Log,Boot,InfiniteScroll,Const) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.search = Search;
  $scope.from = 0;
  $scope.ready = false;
  $scope.first = true;
  $scope.data = [];
  
  $scope.details = function() {
    //$state.go(States.details);
  }
  
  $scope.favorites = function() {
    $state.go(States.favorites);
  }
  
  $scope.refresh = function() {
    
    Search.get({from:0,count:Search.getLimit()},function(d){

      if (d.error) Log.error(d.error);

      Search.clear();
      Search.set(d);
      $scope.data = Search.getData();
      
      Refresher.hide();
      InfiniteScroll.hide();
      
      
    });
  };
  
  $scope.$on(Const.eventReady,function(){
    
    //$scope.refresh();
    $scope.ready = true;
  });
  
  $scope.canMore = function() {
    
    var count = Search.getCount();
    var total = Search.getTotal();
    return $scope.ready && (count>0 && count<total);
  }
  
  $scope.more = function() {
    
    Search.get({from:Search.getCount(),count:Search.getLimit()},function(d){

      if (d.error) Log.error(d.error);

      Search.set(d);
      $scope.data = Search.getData();
      
      Refresher.hide();
      InfiniteScroll.hide();
     
    });
  }

}]);
                                  