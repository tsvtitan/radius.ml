
app.service('Alert',['$ionicPopup','$timeout','Utils','Dictionary','Const',
                     function($ionicPopup,$timeout,Utils,Dictionary,Const) {
    
  
  function showAlert(message,title,options,type,timeout) {
    
    var o = Utils.clone(options) || {};
    var to = (o.timeOut)?o.timeOut:timeout;
    
    var popup = $ionicPopup.alert({
      title: title,
      template: message,
      cssClass: '',
      okType: type
    });
    
    if (Utils.isFunction(o.onTap)) {
      popup.then(o.onTap);
    }
    
    $timeout(function(){
      popup.close();
    },to);
  } 
  
  this.error = function(message,values,options) {
    
    options = (Utils.isFunction(values) && !Utils.isObject(options))?{onTap:values}:options;
    
    showAlert(Dictionary.get(message,values),
              Dictionary.get(Const.alertError),
              options,'button-assertive',Const.timeoutError);  
  }
          
  this.info = function(message,values,options) {
    
    options = (Utils.isFunction(values) && !Utils.isObject(options))?{onTap:values}:options;
    showAlert(Dictionary.get(message,values),
              Dictionary.get(Const.alertInfo),
              options,'button-positive',Const.timeoutInfo);
  }
  
  this.warning = function(message,values,options) {
    
    options = (Utils.isFunction(values) && !Utils.isObject(options))?{onTap:values}:options;
    showAlert(Dictionary.get(message,values),
              Dictionary.get(Const.alertWarning),
              options,'button-energized',Const.timeoutWarning);  
  }
  
  
  this.success = function(message,values,options) {
    
    options = (Utils.isFunction(values) && !Utils.isObject(options))?{onTap:values}:options;
    showAlert(Dictionary.get(message,values),
              Dictionary.get(Const.alertSuccess),
              options,'button-balanced',Const.timeoutSuccess);  
  }
 
    
}]);