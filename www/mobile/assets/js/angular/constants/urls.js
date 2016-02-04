var root = '/mobile';

var api = root.concat('/api');

var images = root.concat('/images');
var userImages = images.concat('/users/{id}');

app.constant('Urls',{
  
  whiteList: [
    'self'/*,
    'https://radius.ml/**'*/
  ],
  
  root: root,
  init: api.concat('/init2'),
  
  authLogin: api.concat('/login'),
  authLogout: api.concat('/logout'),
  
  
});


