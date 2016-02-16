
app.factory('Refresher',['$rootScope',
                         function($rootScope) {
    
  var factory = {
    
    hide: function() {
      
      $rootScope.$broadcast('scroll.refreshComplete');
      
    }
  }
  
  return factory;
  
}]);