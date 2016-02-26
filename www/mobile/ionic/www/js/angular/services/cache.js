
app.service('Cache',['$q','CacheImages','Utils','Log',
                    function($q,CacheImages,Utils,Log) {
    
  this.images = function(data,where,fallback,result) {
    
    /*if (Utils.isArray(data)) {
      
      var promises = [];
      var whereIsArray = Utils.isArray(where);
      var whereIsString = Utils.isString(where);
      
      Utils.forEach(data,function(obj){
      
        if (whereIsArray) {
          
          for (var key in where) {
            
            var image = Utils.isObject(obj)?obj[where[key]]:obj;
            if (Utils.isString(image)) {
              var deferred = $q.defer();
              var p = CacheImages.checkCacheStatus(image).then(function(){
                deferred.resolve();
              }).catch(function(error){
                deferred.resolve(error);
              });
              promises.push(deferred.promise);
            }
          }
          
        } else if (whereIsString) {
          
          var image = Utils.isObject(obj)?obj[where]:obj;
          if (Utils.isString(image)) {
            var deferred = $q.defer();
            var p = CacheImages.checkCacheStatus(image).then(function(){
              deferred.resolve();
            }).catch(function(error){
              deferred.resolve(error);
            });
            promises.push(deferred.promise);
          }
        }
      });
      
      $q.all(promises).then(function(fails){
        
        fails = Utils.compact(fails);
        
        Utils.isArray(fails) && Utils.forEach(data,function(obj){
          
          if (whereIsArray) {
          
            for (var key in where) {

              var image = Utils.isObject(obj)?obj[where[key]]:obj;
              if (fails.indexOf(image)!=-1)
                obj[where[key]] = (fallback)?fallback:image;
            }

          } else if (whereIsString) {

            var image = Utils.isObject(obj)?obj[where]:obj;
            if (fails.indexOf(image)!=-1) 
              obj[where] = (fallback)?fallback:image;
          }
        });
        
        result(data);
      });
              
    } else */result(data);
  }
  
  
}]);