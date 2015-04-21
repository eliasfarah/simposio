angular.module('simposio.services', ['ngResource','ionic.utils'])

.factory('Palestrantes', function($resource, $http, $localstorage) {
	
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
})

.factory('Sobre', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.get('sources/sobre.json').success(callback);
    }
  }
})
;