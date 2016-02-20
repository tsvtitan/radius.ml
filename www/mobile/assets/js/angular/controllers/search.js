
app.controller('search',['$scope','$element','$state','$timeout',
                         '$ionicScrollDelegate','$ionicFilterBar',   
                         'Dictionary','Alert','Log','States','Const','Utils',
                         'Refresher','InfiniteScroll','Search','Loader',
                         function($scope,$element,$state,$timeout,
                                  $ionicScrollDelegate,$ionicFilterBar,
                                  Dictionary,Alert,Log,States,Const,Utils,
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
  
  $scope.more = function(clear,result) {
    
    var conditions = {
      string: $scope.string,
      from: (clear)?0:Search.getCount(),
      count: Search.getLimit()
    }
    
    Search.get(conditions,function(d){

      if (d.error) Log.error(d.error);
      
      Search.set(d,clear,function(){
        
        Refresher.hide();
        InfiniteScroll.hide();
      
        if (Utils.isFunction(result)) result();
      });
      
    });
  }
  
  $scope.refresh = function(result) {
    
    $scope.more(true,result);
  }
  
  $scope.search = function() {
    Loader.show();
    $ionicScrollDelegate.scrollTop();
    $scope.refresh(function(){
      Loader.hide();
    });
  }
  
  $scope.clear = function() {
    $scope.string = '';
    $scope.search();
  }
  
  
  $scope.showFilterBar = function () {
    
    var filterBarInstance = $ionicFilterBar.show({
      
      items: [],
      debounce: true,
      delay: 750,
      filterText: $scope.string,
      cancelText: Dictionary.get(Const.hide),
      placeholder: Dictionary.get(Const.searchString),
      
      update: function (filteredItems,string) {
        
        if (Utils.isDefined(string)) {
          
          if ($scope.string!==string) {
            $scope.string = string;
            $scope.search();
          }
        }
      }
    });
  }

  
}]);
                                  