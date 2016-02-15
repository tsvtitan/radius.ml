
app.controller('boot',['$scope','$element','$interval',
                       'Dictionary','Alert','Const','Spinner','Navbar','Log','Loading', 
                       function($scope,$element,$interval,
                                Dictionary,Alert,Const,Spinner,Navbar,Log,Loading) {
  
  $scope.dic = Dictionary.dic($element);
  $scope.spinner = Spinner;
  $scope.navbar = Navbar;
  $scope.loading = Loading;
  
  $scope.test = function() {
    Alert.info('1231223',function(){
      Log.debug('test');
      //Splash.toggle();
    }); 
  }
  
}]);