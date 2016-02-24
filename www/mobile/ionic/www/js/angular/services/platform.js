
app.service('Platform',['Utils','Const',
                        function(Utils,Const) {
  
  function getPlatform() {
    
    return (ionic)?ionic.Platform:null;
  }
  
  function getDevice() {
    
    var platform = getPlatform();
    return (platform)?platform.device():null;
  }
  
  this.getDeviceId = function() {
    
    var device = getDevice();
    
    return (device && device.uuid)?device.uuid:Const.deviceId;
  } 
  
  this.isAndroid = function() {
    
    var platform = getPlatform();
    return (platform)?platform.isAndroid():false;
  }
  
  this.isIOS = function() {
    
    var platform = getPlatform();
    return (platform)?platform.isIOS():false;
  }
  
  this.isWindowsPhone = function() {
    
    var platform = getPlatform();
    return (platform)?platform.isWindowsPhone():false;
  }
  
}]);