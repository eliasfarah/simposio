angular.module('simposio.services', ['ngResource'])

.factory('Palestrantes', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.get('sources/palestrantes.json').success(callback);
    }
  }
})

.factory('Programacoes', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.get('sources/programacao.json').success(callback);
    }
  }
});