//var root = 'http://radius.ml:51338/mobile';
var root = 'http://radius.ml/mobile';

var api = root.concat('/api');

var images = root.concat('/images');
var userImages = images.concat('/users/{id}');

app.constant('Urls',{
  
  whiteList: [
    'self'/*,
    'https://radius.ml/**'*/
  ],
  
  root: root,
  
  api: {
    init: api.concat('/init'),
    search: api.concat('/search'),
    favorites: api.concat('/favorites')
  },
  
  local: {
    home: '/home',
    search: '/search',
    favorites: '/favorites',
    add: '/add',
    profile: '/profile',
    deal: '/deal',
    details: '/details',
    filter: '/filter',
    history: '/history',
    publication: '/publication',
    registration: '/registration',
    stats: '/stats',
    test: '/test'
  },
  
  data: {
    init: 'data/init.json',
    search: 'data/search.json',
    favorites: 'data/favorites.json',
    details: 'data/details.json'
  }
         
  
});


