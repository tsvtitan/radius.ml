
app.controller('boot',['$scope','$element','$interval',
                       'Dictionary','Alert','Const','Boot','Navbar','Log', 
                       function($scope,$element,$interval,
                                Dictionary,Alert,Const,Boot,Navbar,Log) {
  
  $scope.dic = Dictionary.dic($element);
  $scope.boot = Boot;
  $scope.navbar = Navbar;
  
  $scope.test = function() {
    Alert.info('1231223',function(){
      Log.debug('test');
      //Splash.toggle();
    }); 
  }
  
}]);