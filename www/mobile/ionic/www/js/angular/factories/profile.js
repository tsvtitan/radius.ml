
app.factory('Profile',['$rootScope','Utils',
                       function($rootScope,Utils) {
    
  var factory = {
    
    user: false,
    captcha: false,
    
    set: function(auth) {
      if (Utils.isObject(auth)) {
        this.user = auth.user;
        this.captcha = auth.captcha;
      } else {
        this.user = false;
        this.captcha = false;
      }
    },
    
    getUser: function(){
      return this.user;
    }
  }
  
  return factory;
  
}]);