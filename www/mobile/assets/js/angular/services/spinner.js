
app.service('Spinner',['Utils',
                    function(Utils) {
    
  this.visible = false;
  
  this.show = function() {
    this.visible = true;
  }
  
  this.hide = function() {
    this.visible = false;
  }
  
}]);