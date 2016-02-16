
app.factory('Refresher',['$rootScope','$timeout',
                         function($rootScope,$timeout) {
    
  var factory = {
    
    hide: function() {
      
      $rootScope.$broadcast('scroll.refreshComplete');
      
    }
  }
  
  return factory;
  
}]);