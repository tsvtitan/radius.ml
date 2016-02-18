
app.service('Loader',['$ionicLoading',
                      function($ionicLoading) {
    
  this.visible = false;
  
  this.show = function(scope) {
    
    $ionicLoading.show({
      noBackdrop: true,
      templateUrl: 'loader.html',
      scope: scope
    });
    this.visible = true;
  }
  
  this.hide = function() {
    
    $ionicLoading.hide();
    this.visible = false;
  }
  
}]);