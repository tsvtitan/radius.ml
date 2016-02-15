
app.config(['$provide','$sceDelegateProvider',
            'Const','Urls',
            function($provide,$sceDelegateProvider,
                     Const,Urls) {
    
  $provide.decorator('$templateCache',['$delegate',function($delegate) {
    var originalGet = $delegate.get;

    $delegate.get = function(key) {
      var value;
      value = originalGet(key);
      if (!value) {
        if (key in JST) {
          value = JST[key]();
          if (value) {
            $delegate.put(key, value);
          }
        }
      }
      return value;
    };

    return $delegate;
  }]);

  //$sceDelegateProvider.resourceUrlWhitelist(Urls.whiteList);
  
  return this;
}]);
