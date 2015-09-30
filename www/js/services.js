angular.module('simposio.services', ['ngResource','ionic.utils'])

.factory('Palestrantes', function($resource, $http, $localstorage, $utils, ApiEndpoint) {
	
  return {
    all: function(success_callback) {      
		  $http.get(ApiEndpoint.url+'palestrantes.json?rnd='+new Date().getTime(), { cache: false })
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
		  $http.get(ApiEndpoint.url+'programacao.json?rnd='+new Date().getTime(), { cache: false })
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
		  $http.get(ApiEndpoint.url+'localizacao.json?rnd='+new Date().getTime(), { cache: false })
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
      $http.get(ApiEndpoint.url+'premio.json?rnd='+new Date().getTime(), { cache: false  })
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
		  $http.get(ApiEndpoint.url+'sobre.json?rnd='+new Date().getTime(), { cache: false })
      .success(success_callback)
      .error(function(data, status, headers, config) {
        alert(ApiEndpoint.url+'sobre.json?rnd='+new Date().getTime());
        alert("Ooops, algo deu errado, verifique sua conexão e tente novamente!");
        $scope.$broadcast('scroll.refreshComplete');
        $utils.hide();
      });
    }
  }
});