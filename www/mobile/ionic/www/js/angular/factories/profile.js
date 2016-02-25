
app.factory('Profile',['$rootScope','$http',
                       'Utils','Urls','Data',
                       function($rootScope,$http,
                                Utils,Urls,Data) {
    
  var factory = {
    
    user: false,
    captcha: false,
    changeLocation: false,
    
    get: function(result) {
            
      var self = this;

      $http.post(Urls.api.profile,{})
           .success(function(d){
             result(d);
           })
          .error(function(d){

            Data.load(d,Urls.data.profiles,function(d){

              var temp = false;
              var where = {id:'1'};

              if (Utils.isArray(d.data)) temp = Utils.findWhere(d.data,where);

              if (Utils.isObject(d.data)) temp = d.data;

              d.user = temp;
              delete d.data;
              
              result(d);
            },1500);
          });
    },
    
    set: function(profile) {
      if (Utils.isObject(profile)) {
        this.user = profile.user;
        this.captcha = profile.captcha;
        this.changeLocation = profile.changeLocation;
      } else {
        this.user = false;
        this.captcha = false;
        this.changeLocation = false;
      }
    },
    
    getUser: function(){
      return this.user;
    }
    
  }
  
  return factory;
  
}]);