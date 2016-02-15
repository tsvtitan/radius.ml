
var app = angular.module('radius',['ionic','ngCordova','ab-base64']); 
                      
app.run(['$ionicPlatform',
         'Init','Dictionary','Splash','Alert','Spinner','Navbar',
         function($ionicPlatform,
                  Init,Dictionary,Splash,Alert,Spinner,Navbar) {
  
  
  Navbar.show();
  Spinner.show();
  
  $ionicPlatform.ready(function() {
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    Splash.hide();
    
    Init.get(function(d){
      
      Dictionary.init(d.dictionary);
      
      Spinner.hide();
      /*if (d.error) Alert.error(d.error,function(){
        //Spinner.show();
      });
      else {
        
        Dictionary.init(d.dictionary);
        //Auth.set(d.auth);
        //Auth.ready = (Auth.user);
        //if (Auth.ready) Auth.emitLogin();
      }*/
      
    });
    
  });
  
  
}]);