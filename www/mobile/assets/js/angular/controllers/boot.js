
app.controller('boot',['$scope','$element',
                       'Init','Dictionary','Alert','Const', 
                       function($scope,$element,
                                Init,Dictionary,Alert,Const) {
  
  $scope.dic = Dictionary.dic($element);
  $scope.visible = false;

  Init.get(function(d){
    
    $scope.visible = true;
    
    if (d.error) Alert.error(d.error);
    else {
      
      Dictionary.init(d.dictionary);
      //Auth.set(d.auth);

      Alert.info(Const.checkFields);

      /*Auth.ready = (Auth.user);
      if (Auth.ready) Auth.emitLogin();

      $scope.reload();*/
    }
  });
  
}]);