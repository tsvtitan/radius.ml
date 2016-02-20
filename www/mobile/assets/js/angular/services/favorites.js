
app.service('Favorites',['$http','Urls','Payload','Data','Utils','Cache',
                         function($http,Urls,Payload,Data,Utils,Cache) {
    
  this.total = 0;
  this.data = [];
  this.conditions = {};
  
  this.clear = function() {
    this.total = 0;
    this.data = [];
  }
  
  this.get = function(conditions,result) {
    
    var self = this;
    self.conditions = Utils.extend(self.conditions,conditions || {});
    
    $http.post(Urls.api.favorites,Payload.get(self.conditions))
         .success(function(d){
           result(d);
         })
         .error(function(d){
           Data.load(d,Urls.data.favorites,function(d){
             if (Utils.isArray(d.data)) {
               var from = self.getFrom();
               d.data = d.data.slice(from,from+self.getLimit());
             }
             result(d);
           },1000);
         }); 
  }
  
  this.set = function(d,clear,result) {
    
    if (clear) this.clear();
    this.conditions.limit = Utils.isInteger(d.limit)?d.limit:this.conditions.limit;
    this.total = Utils.isInteger(d.total)?d.total:0;
    if (Utils.isArray(d.data)) {
      
      var data = d.data.slice(0,this.getLimit());
      var self = this;
      
      Cache.images(data,'image',function(){
        
        self.data = self.data.concat(data);
        if (Utils.isFunction(result)) result();
      });
      
      
    } else if (Utils.isFunction(result)) result();
  }
  
  this.getLimit = function() {
    return Utils.isInteger(this.conditions.limit)?this.conditions.limit:10;
  }
  
  this.getFrom = function() {
    return Utils.isInteger(this.conditions.from)?this.conditions.from:0;
  }
  
  this.getCount = function() {
    return Utils.isArray(this.data)?this.data.length:0;
  }
  
  this.getTotal = function() {
    return this.total;
  }
  
  this.getData = function() {
    return this.data;
  }
  
}]);