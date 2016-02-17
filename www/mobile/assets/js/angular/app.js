
var app = angular.module('radius',['ionic','ngCordova','ab-base64','ionicLazyLoad']); 
                      
app.run(['$ionicPlatform','$timeout',
         'Init','Dictionary','Splash','Alert','Boot','Navbar','Log',
         'Search','Profile','Favorites',
         function($ionicPlatform,$timeout,
                  Init,Dictionary,Splash,Alert,Boot,Navbar,Log,
                  Search,Profile,Favorites) {
  
  Boot.show();
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
      
      if (d.error) Log.error(d.error);
      
      Profile.set(d.profile);
      Search.set(d.search,true);
      Favorites.set(d.favorites,true);
      
      if (d.error) Log.error(d.error);
      
      Boot.hide();
      Boot.ready();
    });
    
  });
  
  
}]);