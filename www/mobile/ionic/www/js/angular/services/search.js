
app.service('Search',['$http','Urls','Payload','Data',
                      function($http,Urls,Payload,Data) {
    
  this.get = function(result) {
    
    $http.post(Urls.api.search,Payload.get(),{cache:false})
         .success(function(d){result(d);})
         .error(function(d){
           Data.load(Urls.data.search,result);
         }); 
  }
  
  
}]);