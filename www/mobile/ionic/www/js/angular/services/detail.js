
app.service('Detail',['$http','Urls','Payload','Data','Utils','Search','Favorites',
                      function($http,Urls,Payload,Data,Utils,Search,Favorites) {
  
  this.conditions = {};
  
  this.get = function(conditions,result) {
    
    var self = this;
    self.conditions = Utils.extend(self.conditions,conditions || {});
    
    $http.post(Urls.api.detail,Payload.get(self.conditions))
         .success(function(d){
           result(d);
         })
         .error(function(d){
           
           Data.load(d,Urls.data.details,function(d){
             
             var temp = false;
             var where = {id:self.conditions.id};
             
             if (Utils.isArray(d.data)) temp = Utils.findWhere(d.data,where);
             
             if (Utils.isObject(d.data)) temp = d.data;
             
             if (!temp) temp = Utils.findWhere(Search.getData(),where);
             if (!temp) temp = Utils.findWhere(Favorites.getData(),where);
             
             d.data = temp;
             result(d);
           },1500);
         }); 
  }
  
}]);  
  