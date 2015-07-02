app.controller('MainController', function($scope, background) {
    $scope.generalInfo = {
    	nombre: 'Gabriel',
    	apellidoPat: 'Moreno',
    	apellidoMat: 'López',
    	telefono: '044 777 2674486',
    	email: 'inggml@gmail.com',
    	pais: 'México, D.F.',
    	puesto: "Front End Developer",
    	fullName: function() {
        	return this.nombre + " " + this.apellidoPat + " " + this.apellidoMat;
    	}
    }
    
    $scope.contact = {
		titulo: 'Contact',
    	correo: 'inggml@gmail.com'
    }

    $scope.connect = {
		titulo: 'Connect',
    	linkedin: 'gabrielml'
    }

    $scope.quote = {
		frase: 'Studying Angular and React',
    	por:'GML'
    }

    $scope.skills = [
    	{titulo:'Skills'},
		{skill:'Adobe Illustrator'},
		{skill:'Angular'},
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
	background.success(function(data) {
		$scope.backgroundInfo = data;
	});	
});