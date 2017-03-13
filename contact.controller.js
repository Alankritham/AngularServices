(function(){
var app = angular.module('myapp');
app.controller('contactctrl',function(ContactDataSvc ){
  var self = this;
  self.editmode = false;
  self.addmode = false;
  ContactDataSvc.getContacts()
  .then(function(data){
    self.contacts = data;
    console.log("data" +data);
    console.log("Self.contacts" +self.contacts);
  });



this.selectContact = function(index){
  this.selectedContact= self.contacts[index];
  self.successMessage = undefined;
  self.errorMessage = undefined;
}
this.setEditMode = function(){
  this.editmode = !this.editmode;
}
// Function save User
this.saveUser = function(){
    this.setEditMode();
    var userData = this.selectedContact;
      if(self.addmode){
        ContactDataSvc.createUser(userData)
          .then(function(){
            self.successMessage = "Data successfully Updated";
          },
           function(){
             self.errorMessage = "Error Message";
           }
         );
          self.addmode = false;
      }
      else{
      console.log(userData);
      ContactDataSvc.saveUser(userData)
        .then(function(){
          self.successMessage = "Data successfully Updated";
        },
         function(){
           self.errorMessage = "Error Message";

         }

        );
      }
}
// Function Create User
this.addUser = function(){
  self.addmode = true;
  this.selectedContact={
    "id": new Date().toTimeString()
  };
  this.editmode = true;

}

})
})();
