
app.service('Search',['$http',
                      'Urls','Payload','Data','Utils','Cache','Const',
                      function($http,
                               Urls,Payload,Data,Utils,Cache,Const) {
  
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
    
    $http.post(Urls.api.search,Payload.get(self.conditions))
         .success(function(d){
           result(d);
         })
         .error(function(d){
           
           Data.load(d,Urls.data.search,function(d){
             
             if (Utils.isArray(d.data)) {
               
               var string = self.getString();
               if (!Utils.isEmpty(string)) {
                 
                 var arr = string.split(' ');
                 
                 var s = '(?=.*'+arr.join(')(?=.*')+')';
                 var expression = new RegExp(s,'i');
                 
                 d.data = Utils.filter(d.data,function(obj){
                   
                   var title = false;
                   var desc = false;
                   
                   if (Utils.isString(obj.title)) title = obj.title.search(expression);
                   if (Utils.isString(obj.desc)) desc = obj.desc.search(expression);
                   
                   return (title!=-1) || (desc!=-1);
                 });
               }
                
               var from = self.getFrom();
               d.data = d.data.slice(from,from+self.getLimit());
               if (d.data.length==0) d.total = self.data.length; 
             }
             
             result(d);
             
           },1000);
         }); 
  }
  
  this.set = function(d,clear,result) {
    
    if (clear) this.clear();
    this.conditions.limit = Utils.isInteger(d.limit)?d.limit:this.conditions.limit;
    this.conditions.string = Utils.isString(d.string)?d.string:this.conditions.string;
    this.total = Utils.isInteger(d.total)?d.total:0;
    if (Utils.isArray(d.data)) {
      
      var data = d.data.slice(0,this.getLimit());
      var self = this;
      
      /*Cache.images(data,'image',Const.searchFallback,function(data){
        
        self.data = self.data.concat(data);
        if (Utils.isFunction(result)) result();
      });*/
             
      self.data = self.data.concat(data);
      if (Utils.isFunction(result)) result();
        
    } else if (Utils.isFunction(result)) result();
  }
  
  this.getLimit = function() {
    return Utils.isInteger(this.conditions.limit)?this.conditions.limit:10;
  }
  
  this.getFrom = function() {
    return Utils.isInteger(this.conditions.from)?this.conditions.from:0;
  }
  
  this.getString = function() {
    return Utils.isString(this.conditions.string)?this.conditions.string:'';
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