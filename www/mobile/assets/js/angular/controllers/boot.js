
app.controller('boot',['$scope','$element','$interval','$cordovaFlashlight','$cordovaVibration',
                       'Init','Dictionary','Alert','Const', 
                       function($scope,$element,$interval,$cordovaFlashlight,$cordovaVibration,
                                Init,Dictionary,Alert,Const) {
  
  $scope.dic = Dictionary.dic($element);
  $scope.visible = false;

  Init.get(function(d){
    
    $scope.visible = true;
    
    $cordovaVibration.vibrate(1000);
    $cordovaFlashlight.switchOn();
    
    if (d.error) Alert.error(d.error);
    else {
      
      Dictionary.init(d.dictionary);
      //Auth.set(d.auth);

      Alert.info(Const.checkFields);

      /*Auth.ready = (Auth.user);
      if (Auth.ready) Auth.emitLogin();

      $scope.reload();*/
    }
    
    /*$cordovaFlashlight.available().then(function(exists) {
      
      if (exists) {
        
        Alert.info('found');
        
        $interval(function(){
          $cordovaFlashlight.toggle();
        },1000);
    
      } else Alert.error('not  found');
      
    },function() {
      Alert.error('unavailable');
    });*/
    
  });
  
}]);