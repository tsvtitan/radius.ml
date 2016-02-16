
app.controller('boot',['$scope','$element','$interval',
                       'Dictionary','Alert','Const','Boot','Navbar','Log','Loading', 
                       function($scope,$element,$interval,
                                Dictionary,Alert,Const,Boot,Navbar,Log,Loading) {
  
  $scope.dic = Dictionary.dic($element);
  $scope.boot = Boot;
  $scope.navbar = Navbar;
  $scope.loading = Loading;
  
  $scope.test = function() {
    Alert.info('1231223',function(){
      Log.debug('test');
      //Splash.toggle();
    }); 
  }
  
}]);