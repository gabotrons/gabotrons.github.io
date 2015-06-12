var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "Gabriel";
    $scope.lastName = "Moreno López";
    $scope.telNumber = "044 777 2674486";
    $scope.email = "inggml@gmail.com";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
    $scope.position= "Front End Developer";
    $scope.liveIn= "México, D.F.";
    $scope.skills = [
		{skill:'Adobe Illustrator'},
		{skill:'Adobe Photoshop'},
		{skill:'Bootstrap'},
		{skill:'Bower'},
		{skill:'CSS3'},
		{skill:'Desing'},
		{skill:'GIT'},
		{skill:'Grunt'},
		{skill:'Gumby'},
		{skill:'HTML5'},
		{skill:'Jade'},
		{skill:'Jira'},
		{skill:'Jquery'},
		{skill:'MySQL'},
		{skill:'NodeJS'},
		{skill:'PHP'},
		{skill:'Prototype'},
		{skill:'Responsive Design'},
		{skill:'SASS'},
		{skill:'Scrum'},
		{skill:'Stylus'},
		{skill:'Twig'},
		{skill:'UI'},
		{skill:'Ubuntu'},
		{skill:'YSlow and PageSpeed'},
	]
});