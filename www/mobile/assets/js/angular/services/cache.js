
app.service('Cache',['$ImageCacheFactory','Utils',
                    function($ImageCacheFactory,Utils) {
    
  this.images = function(data,where,result) {
    
    if (Utils.isArray(data)) {
      
      var images = [];
      var whereIsArray = Utils.isArray(where);
      var whereIsString = Utils.isString(where);
      
      Utils.forEach(data,function(obj){
      
        if (whereIsArray) {
          
          for (var key in where) {
            
            var image = Utils.isObject(obj)?obj[where[key]]:obj;
            if (Utils.isString(image)) images.push(image);
          }
          
        } else if (whereIsString) {
          
          var image = Utils.isObject(obj)?obj[where]:obj;
          if (Utils.isString(image)) images.push(image);
        }
      });
      
      images = Utils.unique(images);
      
      $ImageCacheFactory.Cache(images).then(result);
        
    } else result();
  }
  
  
}]);