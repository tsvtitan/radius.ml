
app.controller('home',['$scope','$element',
                       'Dictionary','Urls',
                       function($scope,$element,
                                Dictionary,Urls) {
   
  $scope.dic = Dictionary.dic($element);  
  $scope.urls = Urls.local;
}]);