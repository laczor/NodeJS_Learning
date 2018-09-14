angular.module('TestApp', []);

angular.module('TestApp')
	.controller('MainController', ctrlFunc);
	
function ctrlFunc() {
	this.people = clientPeople;								//This is basically referencing to the global clientPeople object, which is populated by <%- syntax in the ejs template%>
}