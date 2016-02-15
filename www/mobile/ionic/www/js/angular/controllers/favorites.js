
app.controller('favorites',['$scope','$element','$state',
                            'Dictionary','Alert','Loading','States','Favorites', 
                            function($scope,$element,$state,
                                     Dictionary,Alert,Loading,States,Favorites) {

  $scope.dic = Dictionary.dic($element);
  $scope.data = [];
  
  $scope.details = function() {
    $state.go(States.details);
  }
  
  Loading.show($scope);

  Favorites.get(function(d){

    Loading.hide();

    if (d.error) Alert.error(d.error);
    else {
      $scope.data = d.data;
    }
  });

}]);