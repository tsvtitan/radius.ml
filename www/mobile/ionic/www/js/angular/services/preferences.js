
app.service('Preferences',['$cordovaPreferences','Log','Utils',
                           function($cordovaPreferences,Log,Utils) {
                          
  this.write = function(key,value,result) {
    
    if ($cordovaPreferences) {
      
      $cordovaPreferences.store(key,value)
      .success(function() {
        if (Utils.isFunction(result)) result(true);
      })
      .error(function(error) {
        Log.error(error);
        if (Utils.isFunction(result)) result(false);
      });
       
    } else if (Utils.isFunction(result)) result(false);
  }   
  
  this.read = function(key,result) {
    
    if ($cordovaPreferences) {
      
      $cordovaPreferences.fetch(key)
      .success(function(value) {
        if (Utils.isFunction(result)) result(value);
      })
      .error(function(error) {
        Log.error(error);
        if (Utils.isFunction(result)) result();
      });
       
    } else if (Utils.isFunction(result)) result();
  }
  
  this.show = function(result) {
    
    if ($cordovaPreferences) {
      
      $cordovaPreferences.show()
      .success(function(){
        if (Utils.isFunction(result)) result(true);
      })
      .error(function(error) {
        Log.error(error);
        if (Utils.isFunction(result)) result(false);
      });
      
    } else if (Utils.isFunction(result)) result();
  }
  
}]);