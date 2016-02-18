app.controller('test',['$scope','$element','$state',
                       'Dictionary','Alert','Loader','States','Search', 
                       function($scope,$element,$state,
                                 Dictionary,Alert,Loader,States,Search) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.data = [];
  
  function load() {
    
    Loader.show();

    Search.get(function(d){

      Loader.hide();

      if (d.error) Alert.error(d.error);
      else {
        $scope.data = d.data;
      }
    });
  }
  
  $scope.reload = function() {
    load();
  };
  

  load();

}]);