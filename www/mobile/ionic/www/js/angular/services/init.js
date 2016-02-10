
app.service('Init',['$http','$window','Urls','Dictionary','Payload','Utils','Spinner',
                    function($http,$window,Urls,Dictionary,Payload,Utils,Spinner) {
    
  var inits = [];
  
  this.get = function(result) {
    
    Spinner.show();
    
    $http.post(Urls.init,Payload.get(),{cache:true})
         .success(function(d){
                    Spinner.hide();
                    if (d.reload) {
                      $window.location.reload();
                    } else result(d);
                  })
         .error(function(d){ 
           Spinner.hide();
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