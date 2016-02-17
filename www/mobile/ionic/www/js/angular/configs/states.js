
app.config(['$stateProvider','$urlRouterProvider',
            'States','Urls','Const',
            function($stateProvider,$urlRouterProvider,
                     States,Urls,Const) {
  
  
  $stateProvider.state(States.home, {
    url: Urls.local.home,
    templateUrl: 'home.html',
    resolve: {
      Ready: (['$q','$rootScope',function($q,$rootScope) {
        
        var deferred = $q.defer();
        $rootScope.$on(Const.eventReady,function(){
          deferred.resolve(true);
        });
        return deferred.promise;
      }])
    }
  });
  
  $stateProvider.state('home.search', {
    url: Urls.local.search,
    views: {
      'home-search': {
        templateUrl: 'search.html'
      }
    }
  });

  $stateProvider.state('home.favorites', {
    url: Urls.local.favorites,
    views: {
      'home-favorites': {
        templateUrl: 'favorites.html'
      }
    }
  });
  
  $stateProvider.state('details',{
    url: Urls.local.details,
    templateUrl: 'details.html',
    params: {item:null}
  }); 
  
  $stateProvider.state('home.add', {
    url: Urls.local.add,
    views: {
      'home-add': {
        templateUrl: 'add.html'
      }
    }
  });
  
  $stateProvider.state('home.profile', {
    url: Urls.local.profile,
    views: {
      'home-profile': {
        templateUrl: 'profile.html'
      }
    }
  });
  
  $stateProvider.state(States.deal,{
    url: Urls.local.deal,
    templateUrl: 'deal.html'
  });

  $stateProvider.state(States.filter,{
    url: Urls.local.filter,
    templateUrl: 'filter.html'
  });              

  $stateProvider.state(States.history,{
    url: Urls.local.history,
    templateUrl: 'history.html'
  });              

  $stateProvider.state(States.publication,{
    url: Urls.local.publication,
    templateUrl: 'publication.html'
  });              

  $stateProvider.state(States.registration,{
    url: Urls.local.registration,
    templateUrl: 'registration.html'
  });              
              
  $stateProvider.state(States.stats,{
    url: Urls.local.stats,
    templateUrl: 'stats.html'
  });
  
  $stateProvider.state(States.test,{
    url: Urls.local.test,
    templateUrl: 'test.html'
  }); 
          
  $urlRouterProvider.otherwise('/home/search');        

  return this;
}]);