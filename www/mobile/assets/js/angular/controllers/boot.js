
app.controller('boot',['$scope','$element','$interval',
                       'Spinner','Dictionary','Alert','Const','Splash','Log', 
                       function($scope,$element,$interval,
                                Spinner,Dictionary,Alert,Const,Splash,Log) {
  
  $scope.dic = Dictionary.dic($element);
  $scope.spinner = Spinner;
  
 /* Init.get(function(d){
    
    $scope.visible = true;
    //Splash.hide();
    
/*    if (d.error) {
      Alert.error(d.error,function(){
       // Splash.hide();
  
      });
    } else {
      
      Dictionary.init(d.dictionary);
      //Auth.set(d.auth);

      Alert.info(Const.checkFields);

      /*Auth.ready = (Auth.user);
      if (Auth.ready) Auth.emitLogin();

      $scope.reload();
    }*/
    
    /*$cordovaFlashlight.available().then(function(exists) {
      
      if (exists) {
        
        Alert.info('found');
        
        $interval(function(){
          $cordovaFlashlight.toggle();
        },1000);
    
      } else Alert.error('not  found');
      
    },function() {
      Alert.error('unavailable');
    });
    
  });*/
  
}]);