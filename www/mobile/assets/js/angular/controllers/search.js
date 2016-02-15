
app.controller('search',['$scope','$element','$state',
                         'Dictionary','Alert','Loading','States','Search', 
                         function($scope,$element,$state,
                                  Dictionary,Alert,Loading,States,Search) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.data = [];
  
  $scope.details = function() {
    $state.go(States.details);
  }
  
  $scope.favorites = function() {
    $state.go(States.favorites);
  }  

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
                                  