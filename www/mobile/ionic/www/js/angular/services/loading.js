
app.service('Loading',['$ionicLoading','Dictionary','Const',
                       function($ionicLoading,Dictionary,Const) {
    
  this.visible = false;
  
  this.show = function(scope) {
    
    $ionicLoading.show({
      noBackdrop: false,
      template: Dictionary.get(Const.loading),
      scope: scope
    });
    this.visible = true;
  }
  
  this.hide = function() {
    
    $ionicLoading.hide();
    this.visible = false;
  }
  
}]);