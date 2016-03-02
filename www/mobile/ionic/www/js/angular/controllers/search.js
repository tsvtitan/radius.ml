
app.controller('search',['$scope','$element','$state','$timeout',
                         '$ionicScrollDelegate','$ionicFilterBar','NgMap',   
                         'Dictionary','Alert','Log','States','Const','Utils','Profile',
                         'Refresher','InfiniteScroll','Search','Loader','Geolocation',
                         function($scope,$element,$state,$timeout,
                                  $ionicScrollDelegate,$ionicFilterBar,NgMap,
                                  Dictionary,Alert,Log,States,Const,Utils,Profile,
                                  Refresher,InfiniteScroll,Search,Loader,Geolocation) {
   
  $scope.dic = Dictionary.dic($element);                                 
  $scope.service = Search;
  $scope.loader = Loader;
  $scope.string = Search.getString();
  $scope.profile = Profile;
  $scope.location = Geolocation.location;
  $scope.markers = [];
  
  $scope.favorites = function() {
    $state.go(States.favorites);
  }
  
  $scope.toggle = function() {
    $scope.service.list = !$scope.service.list;
  }
  
  $scope.canMore = function() {
    
    var count = Search.getCount();
    var total = Search.getTotal();
    return (count>0 && count<total);
  }
  
  function refreshMap(result) {
    
    Utils.forEach($scope.markers,function(m){
      m.setMap(null);
    });
    
    $scope.markers = [];
    if ($scope.markerClusterer) $scope.markerClusterer.clearMarkers();
    
    NgMap.getMap().then(function(map){

      var bounds = new google.maps.LatLngBounds();

      Utils.forEach(Search.getData(),function(d){

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(d.lat,d.lon)
        });

        $scope.markers.push(marker);
        bounds.extend(marker.getPosition());

      });

      $scope.markerClusterer = new MarkerClusterer(map,$scope.markers,{});

      map.setCenter(bounds.getCenter());
      map.fitBounds(bounds);  
      
      if (Utils.isFunction(result)) result();
    });
  }
  
  $scope.more = function(clear,result) {
    
    var conditions = {
      string: $scope.string,
      from: (clear)?0:Search.getCount(),
      count: Search.getLimit()
    }
    
    Search.get(conditions,function(d){

      if (d.error) Log.error(d.error);
      
      Search.set(d,clear,function(){
        
        Refresher.hide();
        InfiniteScroll.hide();
        
        refreshMap(result);
      });
    });
  }
  
  $scope.refresh = function(result) {
    
    $scope.more(true,result);
  }
  
  $scope.search = function() {
    Loader.show($scope);
    $ionicScrollDelegate.scrollTop();
    $scope.refresh(function(){
      Loader.hide();
    });
  }
  
  $scope.clear = function() {
    $scope.string = '';
    $scope.search();
  }
  
  
  $scope.showFilterBar = function () {
    
    var filterBarInstance = $ionicFilterBar.show({
      
      items: [],
      debounce: true,
      delay: 750,
      filterText: $scope.string,
      cancelText: Dictionary.get(Const.hide),
      placeholder: Dictionary.get(Const.searchString),
      
      update: function (filteredItems,string) {
        
        if (Utils.isDefined(string)) {
          
          if ($scope.string!==string) {
            $scope.string = string;
            $scope.search();
          }
        }
      }
    });
  }
  
  
  refreshMap();
  
}]);
                                  