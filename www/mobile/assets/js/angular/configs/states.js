
app.config(['$stateProvider','$urlRouterProvider',
            'States','Urls',
            function($stateProvider,$urlRouterProvider,
                     States,Urls) {
  
  $stateProvider.state(States.deal,{
    url: Urls.deal,
    templateUrl: 'deal.html'
  });

  $stateProvider.state(States.details,{
    url: Urls.details,
    templateUrl: 'details.html'
  });              

  $stateProvider.state(States.filter,{
    url: Urls.filter,
    templateUrl: 'filter.html'
  });              

  $stateProvider.state(States.history,{
    url: Urls.history,
    templateUrl: 'history.html'
  });              

  $stateProvider.state(States.profile,{
    url: Urls.profile,
    templateUrl: 'profile.html'
  }); 
  
  $stateProvider.state(States.publication,{
    url: Urls.publication,
    templateUrl: 'publication.html'
  });              

  $stateProvider.state(States.registration,{
    url: Urls.registration,
    templateUrl: 'registration.html'
  });              
              
  $stateProvider.state(States.search,{
    url: Urls.search,
    templateUrl: 'search.html'
  });
     
  $stateProvider.state(States.stats,{
    url: Urls.stats,
    templateUrl: 'stats.html'
  });         
          
  $urlRouterProvider.otherwise(Urls.search);        

  return this;
}]);