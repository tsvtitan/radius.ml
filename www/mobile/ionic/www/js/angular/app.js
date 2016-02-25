
var app = angular.module('radius',['ionic','ngCordova','ab-base64','ionicLazyLoad','ngMap',
                                   'ionic.ion.imageCacheFactory','jett.ionic.filter.bar']); 
                      
app.run(['$ionicPlatform','$timeout',
         'Init','Dictionary','Splash','Alert','Boot','Navbar','Log',
         'Search','Profile','Favorites','Network','Preferences',
         function($ionicPlatform,$timeout,
                  Init,Dictionary,Splash,Alert,Boot,Navbar,Log,
                  Search,Profile,Favorites,Network,Preferences) {
  
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
    
    /*Preferences.read('HelloKey',function(value){
      
      if (!value) {
        Preferences.write('HelloKey',{id:1,name:'test',value:1.999},function(){

          Preferences.read('HelloKey',function(value){

            Log.debug(value);
          });
        });
      }
    });*/
    
    
    Init.getData(function(d){
      
      Dictionary.init(d.dictionary);
      
      if (d.error) Log.error(d.error);
      
      Profile.set(d.profile);
      Search.set(d.search,true,function(){
        
        Favorites.set(d.favorites,true);
      
        Boot.hide();
        Boot.ready();
      });
      
    });
    
  });
  
  
}]);