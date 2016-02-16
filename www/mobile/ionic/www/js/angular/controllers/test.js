app.controller('test',['$scope','$element','$state',
                       'Dictionary','Alert','Loading','States','Search', 
                       function($scope,$element,$state,
                                 Dictionary,Alert,Loading,States,Search) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.data = [];
  
  function load() {
    
    Loading.show();

    Search.get(function(d){

      Loading.hide();

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