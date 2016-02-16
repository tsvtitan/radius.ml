
app.factory('InfiniteScroll',['$rootScope',
                              function($rootScope) {
    
  var factory = {
    
    hide: function() {
      
      $rootScope.$broadcast('scroll.infiniteScrollComplete');
      
    }
  }
  
  return factory;
  
}]);