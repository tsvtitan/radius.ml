
app.service('Init',['$http','$window','Urls','Dictionary','Payload','Utils','Alert',
                    function($http,$window,Urls,Dictionary,Payload,Utils,Alert) {
    
  var inits = [];
  
  this.get = function(result) {
    
    $http.post(Urls.api.init,Payload.get(),{cache:false})
         .success(function(d){
                    if (d.reload) {
                      Alert.debug('Reload needed');
                    } else result(d);
                  })
         .error(function(d){ 
           result({error:Dictionary.connectionFailed(d)}); 
        });
  }
  
  this.once = function(name,callback) {
    
    if (inits.indexOf(name)===-1) {
      
      if (Utils.isFunction(callback)) {
        callback();
      }
      
      inits.push(name);
      return true;
      
    } return false;
  }
  
  this.reset = function(names) {
    
    if (Utils.isString(names)) {
      delete inits[names];
    } else if (Utils.isArray(names)) {
      Utils.forEach(names,function(name){
        delete inits[name];
      });
    } else {
      Utils.forEach(inits,function(name){
        delete inits[name];
      });
    }
  }
  
}]);