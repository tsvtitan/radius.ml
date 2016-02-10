
app.service('Splash',['$cordovaSplashscreen','$timeout','Log',
                      function($cordovaSplashscreen,$timeout,Log) {
  var visible = false;
  
  this.show = function () {
    
    try {
      $timeout(function(){
        $cordovaSplashscreen.show();
        visible = true;
      },100);
    } catch(e) {
      Log.exception(e);
    }
  } 
  
  this.hide = function () {
    
    try {
      $timeout(function(){
        $cordovaSplashscreen.hide();
        visible = false;
      },100);
    } catch(e) {
      Log.exception(e);
    }
  }
  
  this.toggle = function () {
    if (!visible) this.show();
    else this.hide();
  }
  
}]);