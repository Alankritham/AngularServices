(function(){
  var app = angular.module('myapp');
  app.service("appDataSvc", function(AppNameSvc){
  this.name=AppNameSvc;
  this.author="Alankritha";
  this.builtDate = new Date().toDateString();
});
})();
