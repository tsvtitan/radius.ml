var root = 'http://radius.ml:51338/mobile';

var api = root.concat('/api');

var images = root.concat('/images');
var userImages = images.concat('/users/{id}');

app.constant('Urls',{
  
  whiteList: [
    'self'/*,
    'https://radius.ml/**'*/
  ],
  
  root: root,
  init: api.concat('/init'),
  
  authLogin: api.concat('/login'),
  authLogout: api.concat('/logout'),
  
  deal: '/deal',
  details: '/details',
  filter: '/filter',
  history: '/history',
  profile: '/profile',
  publication: '/publication',
  registration: '/registration',
  search: '/search',
  stats: '/stats'
  
});


