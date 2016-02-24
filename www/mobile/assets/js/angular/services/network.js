
app.service('Network',['$cordovaNetwork',
                       function($cordovaNetwork) {
  
  var onlineStates = ['unknown','ethernet','wifi'];
  
  this.isOnline = function() {
    
    var state = ($cordovaNetwork)?$cordovaNetwork.getNetwork():false;
    
    return ($cordovaNetwork)?($cordovaNetwork.isOnline() || 
                              (onlineStates.indexOf(state)!=-1)):false;
  }   
  
}]);