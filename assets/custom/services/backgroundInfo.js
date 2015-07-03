app.factory('background', ['$http', function($http){
	return $http.get('http://gabotrons.github.io/background.json') 
	.success(function(data) { 
		return data; 
	}) 
	.error(function(err) { 
		return err; 
	});
}])