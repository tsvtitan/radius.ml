
app.service('Payload',['$window','Utils','Profile',
                      function($window,Utils,Profile) {
  
  
  this.size = function() {
    return {width:$window.innerWidth,height:$window.innerHeight};
  }
  
  this.get = function(obj,includeUser) {
    
    var o = {
      payload: {
        size: this.size()
      }
    }
    
    if (includeUser) o.payload.user = Profile.getUser();
    
    return Utils.extend(o,obj); 
  }
  
}]);