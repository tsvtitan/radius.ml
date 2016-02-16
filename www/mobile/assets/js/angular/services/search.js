
app.service('Search',['$http','Urls','Payload','Data','Utils',
                      function($http,Urls,Payload,Data,Utils) {
  
  this.data = [];
  this.conditions = {};
  
  this.getData = function(conditions,result) {
    
    this.conditions = conditions || {};
    
    $http.post(Urls.api.search,Payload.get(this.conditions))
         .success(function(d){result(d);})
         .error(function(d){
           Data.load(d,Urls.data.search,result);
         }); 
  }
  
  this.setData = function(data) {
    
    this.data = Utils.isArray(data)?data:[];
  }
  
  
}]);