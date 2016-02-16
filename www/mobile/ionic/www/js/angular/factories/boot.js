
app.factory('Boot',['$rootScope','Const',
                    function($rootScope,Const) {
    
  var factory = {
    
    visible: true,
    
    show: function() {
      this.visible = true;
    },
    
    hide: function() {
      this.visible = false;
    },
    
    ready: function() {
      $rootScope.$broadcast(Const.eventReady);
    }
  }
  
  return factory;
}]);