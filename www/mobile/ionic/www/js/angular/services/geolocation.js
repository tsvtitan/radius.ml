
app.service('Geolocation',['$cordovaGeolocation','Utils','Const','Log','Alert',
                           function($cordovaGeolocation,Utils,Const,Log,Alert) {
  this.location = {};
  
  this.get = function(result) {
    
    var self = this;
    
    if ($cordovaGeolocation) {
      
      var options = {
        timeout: Const.locationTimeout, 
        enableHighAccuracy: true
      };
      
      $cordovaGeolocation.getCurrentPosition(options)
      .then(function(position){
        
        self.location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        
        if (Utils.isFunction(result)) 
          result(self.location);
        
      },function(error){
        Log.error(error);
        if (Utils.isFunction(result)) result();
      });                   
       
    } else if (Utils.isFunction(result)) result(Const.location);
  }   
  
}]);