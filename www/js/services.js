angular.module('simposio.services', ['ngResource','ionic.utils'])

.factory('Palestrantes', function($resource, $http, $localstorage) {
	
  return {
    all: function(callback) {
		$http.post('http://sis.cejam.org.br/simposio/palestrantes.php').success(callback);		
    }
  }
})

.factory('Programacoes', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.post('http://sis.cejam.org.br/simposio/programacao.php').success(callback);
    }
  }
})

.factory('Localizacao', function($resource, $http) {
  return {
    all: function(callback) {
		$http.post('http://sis.cejam.org.br/simposio/localizacao.php').success(callback);
    }
  }
})

.factory('Sobre', function($resource, $http) {
	
  return {
    all: function(callback) {
		$http.post('http://sis.cejam.org.br/simposio/sobre.php').success(callback);
    }
  }
});