
app.service('Init',['$http',
                    'Urls','Payload','Utils','Alert','Data',
                    function($http,
                             Urls,Payload,Utils,Alert,Data) {
    
  var inits = [];
  
  this.getData = function(result) {
    
    $http.post(Urls.api.init,Payload.get({},false))
         .success(function(d){
                    if (d.reload) {
                      Alert.debug('Reload needed');
                    } else result(d);
                  })
         .error(function(d){ 
           Data.load(d,Urls.data.init,result,1000);
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