angular.module('simposio.services', ['ngResource','ionic.utils'])

.factory('Palestrantes', function($resource, $http, $localstorage, $utils, ApiEndpoint) {
	
  return {
    all: function(success_callback) {      
		  $http.post(ApiEndpoint.url+'palestrantes.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {        
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");                
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Programacoes', function($resource, $http, $localstorage, $utils, ApiEndpoint) {
	
  return {
    all: function(success_callback) {
		  $http.post(ApiEndpoint.url+'programacao.json')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Localizacao', function($resource, $http, $localstorage, $utils, ApiEndpoint) {
  return {
    all: function(success_callback) {
		  $http.post(ApiEndpoint.url+'localizacao.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Premio', function($resource, $http, $localstorage, $utils, ApiEndpoint) {
  return {
    all: function(success_callback) {
      $http.post(ApiEndpoint.url+'premio.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
})

.factory('Sobre', function($resource, $http, $localstorage, $utils, ApiEndpoint) {
	
  return {
    all: function(success_callback) {
		  $http.post(ApiEndpoint.url+'sobre.php')
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
});