
app.controller('details',['$scope','$element','$stateParams',
                          'Dictionary','States', 
                          function($scope,$element,$stateParams,
                                   Dictionary,States) {

  $scope.dic = Dictionary.dic($element);                                 
  $scope.item = $stateParams.item;
  
}]);