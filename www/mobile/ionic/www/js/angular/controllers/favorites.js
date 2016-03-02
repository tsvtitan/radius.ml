
app.controller('favorites',['$scope','$element','$state',
                            'Dictionary','Alert','Log','States','Const','States',
                            'Refresher','InfiniteScroll','Favorites', 
                            function($scope,$element,$state,
                                     Dictionary,Alert,Log,States,Const,States,
                                     Refresher,InfiniteScroll,Favorites) {

  $scope.dic = Dictionary.dic($element);
  $scope.service = Favorites;
  
  $scope.search = function() {
    $state.go(States.search);
  }
  
  $scope.detail = function(job) {
    
    $state.go(States.favoritesDetail,{id:job.id});
  }

  $scope.canMore = function() {
    
    var count = Favorites.getCount();
    var total = Favorites.getTotal();
    return (count>0 && count<total);
  }
  
  $scope.more = function(clear) {
    
    Favorites.get({from:(clear)?0:Favorites.getCount(),count:Favorites.getLimit()},function(d){

      if (d.error) Log.error(d.error);
      
      Favorites.set(d,clear,function(){
      
        Refresher.hide();
        InfiniteScroll.hide();
      });
      
    });
  }
  
  $scope.refresh = function() {
    
    $scope.more(true);
  };
  
}]);