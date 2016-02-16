
app.service('Favorites',['$http','Urls','Payload','Data',
                         function($http,Urls,Payload,Data) {
    
  this.get = function(result) {
    
    $http.post(Urls.api.favorites,Payload.get())
         .success(function(d){result(d);})
         .error(function(d){
           Data.load(d,Urls.data.favorites,result);
         }); 
  }
  
}]);