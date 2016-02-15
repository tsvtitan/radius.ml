
app.service('Data',['$http','$timeout','Const','Dictionary',
                    function($http,$timeout,Const,Dictionary) {
    
  this.load = function(url,result,delay) {
    
    function success(d) {
      
      $timeout(function(){
        result(d);
      },(delay)?delay:Const.delaySuccess);
    }
    
    function error(d) {
     
      $timeout(function(){
        result({error:Dictionary.connectionFailed(d)});
      },(delay)?delay:Const.delaySuccess);
    }
    
    $http.get(url).success(success).error(error);
  }
  
  
}]);