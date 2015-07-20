var remote_server = 'http://sis.cejam.org.br/simposio/';
angular.module('simposio.services', ['ngResource','ionic.utils'])

.factory('Palestrantes', function($resource, $http, $localstorage, $utils) {
	
  return {
    all: function(success_callback) {
		  $http.post(remote_server+'palestrantes.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {        
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");                
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Programacoes', function($resource, $http, $localstorage, $utils) {
	
  return {
    all: function(success_callback) {
		  $http.post(remote_server+'programacao.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Localizacao', function($resource, $http, $localstorage, $utils) {
  return {
    all: function(success_callback) {
		  $http.post(remote_server+'localizacao.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Premio', function($resource, $http, $localstorage, $utils) {
  return {
    all: function(success_callback) {
      $http.post(remote_server+'premio.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Sobre', function($resource, $http, $localstorage, $utils) {
	
  return {
    all: function(success_callback) {
		  $http.post(remote_server+'sobre.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
});