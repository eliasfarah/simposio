angular.module('simposio.services', ['ngResource','ionic.utils'])

.factory('Palestrantes', function($resource, $http, $localstorage) {
	
  return {
    all: function(callback) {
		$http.defaults.useXDomain = true;
		$http.get('https://sis.cejam.org.br/simposio/palestrantes.json').success(callback);
    }
  }
})

.factory('Programacoes', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.defaults.useXDomain = true;
		$http.get('https://sis.cejam.org.br/simposio/programacao.json').success(callback);
    }
  }
})

.factory('Localizacao', function($resource, $http) {	
  return {
    all: function(callback) {
		$http.defaults.useXDomain = true;
		$http.get('https://sis.cejam.org.br/simposio/localizacao.json').success(callback);
    }
  }
})

.factory('Sobre', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.defaults.useXDomain = true;
		$http.get('https://sis.cejam.org.br/simposio/sobre.json').success(callback);
    }
  }
})
;