
app.service('Boot',['Utils',
                    function(Utils) {
    
  this.visible = true;
  
  this.show = function() {
    this.visible = true;
  }
  
  this.hide = function() {
    this.visible = false;
  }
  
}]);