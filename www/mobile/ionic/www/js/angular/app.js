
var app = angular.module('radius',['ionic','ngCordova','ab-base64']); 
                      
app.run(['$ionicPlatform',
         'Init','Dictionary','Splash','Alert','Boot','Navbar','Search','Log','Profile',
         function($ionicPlatform,
                  Init,Dictionary,Splash,Alert,Boot,Navbar,Search,Log,Profile) {
  
  Navbar.show();
  
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
    
    Init.getData(function(d){
      
      Dictionary.init(d.dictionary);
      Profile.set(d.profile);
      
      if (d.error) Log.error(d.error);
      
      Boot.hide();
      Boot.ready();
      /*Search.get(d.search,function(d){
        
        if (d.error) Log.error(d.error);
        Search.set(d);
        Boot.hide();
        Boot.ready();
      });*/
      
    });
    
  });
  
  
}]);