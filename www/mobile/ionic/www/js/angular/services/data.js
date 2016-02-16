
app.service('Data',['$http','$timeout','Const','Dictionary',
                    function($http,$timeout,Const,Dictionary) {
    
  this.load = function(err,url,result,delay) {
    
    function success(d) {
      
      $timeout(function(){
        result(d);
      },(delay)?delay:Const.dataDelaySuccess);
    }
    
    function error(d) {
     
      $timeout(function(){
        result({error:Dictionary.connectionFailed(err)});
      },(delay)?delay:Const.dataDelayError);
    }
    
    $http.get(url,{cache:false,timeout:1000}).success(success).error(error);
  }
  
  
}]);