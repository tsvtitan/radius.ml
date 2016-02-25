
app.controller('test',['$scope','$element','$state',
                       'Dictionary','Alert','Loader','Geolocation','Const',
                       function($scope,$element,$state,
                                 Dictionary,Alert,Loader,Geolocation,Const) {
   
  $scope.dic = Dictionary.dic($element);                                 
  
  //$scope.$on('$ionicView.beforeEnter',function(){
  
  $scope.refresh = function() {
    
    Loader.show($scope);
    
    var options = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 0
    };
    
    Geolocation.get(options,function(location){
      
      location = (location)?location:Const.location;
      
      var latlong = new google.maps.LatLng(location.latitude,location.longitude);
      
      var mapOptions = {
        center: latlong,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      if (!$scope.map) {
        var map = new google.maps.Map(document.getElementById('map'),mapOptions);     

        $scope.map = map;   
      }
      
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
        var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latlong
        });      

        var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
        });

      });

      
      Loader.hide();
      
    });
  }  
    
  $scope.$on(Const.eventReady,function(){
    $scope.refresh();
  });
  
  $scope.findMe = function(){
    $scope.refresh();
  };
    
 // });

}]);