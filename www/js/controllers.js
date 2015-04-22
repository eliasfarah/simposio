angular.module('simposio.controllers', ['uiGmapgoogle-maps'])

.controller('ProgramacaoController', function($scope, Programacoes, $localstorage, $ionicScrollDelegate) {
	
	$scope.update = function() {
		Programacoes.all(function(data) {
			$localstorage.setObject('programacoes', data);
			$scope.programacoes = data;
			$scope.$broadcast('scroll.refreshComplete');
		});
	}
	
	var programacoes = $localstorage.getObject('programacoes');

	if(angular.equals({}, programacoes)) {
		$scope.update();
	} else {
		$scope.programacoes = programacoes;
	}
	
})

.controller('PalestrantesController', function($scope, Palestrantes, $localstorage){
	$scope.update = function() {
		Palestrantes.all(function(data) {
			$localstorage.setObject('palestrantes', data);
			$scope.palestrantes = data;
			$scope.$broadcast('scroll.refreshComplete');
		});
	}
	
	var palestrantes = $localstorage.getObject('palestrantes');
		
	if(angular.equals({}, palestrantes)) {
		$scope.update();
	} else {
		$scope.palestrantes = palestrantes;
	}
})

.controller('PalestranteDetalhesController', function($scope, $stateParams, Palestrantes) {
	Palestrantes.all(function(data){
		$scope.palestrante = data[$stateParams.palestranteId];
	});
})

.controller('LocalizacaoController', function($scope, Localizacao, $localstorage) {
	$scope.update = function() {
		Localizacao.all(function(data) {
			$localstorage.setObject('localizacao', data);
			$scope.$broadcast('scroll.refreshComplete');
			return data;
		});
	}
	
	var localizacao = $localstorage.getObject('localizacao');

	if(angular.equals({}, localizacao)) {
		localizacao = $scope.update();
	}
	
	$scope.localizacao = localizacao;
	$scope.map = {center: {latitude: localizacao.lat, longitude: localizacao.longi }, zoom: 17 };
	$scope.marker = {
	  id: 0,
	  coords: {
	    latitude: localizacao.lat,
	    longitude: localizacao.longi
	  },
	  options: { draggable: false }
	};
	
})

.controller('SobreController', function($scope, Sobre, $localstorage) {
	$scope.update = function() {
		Sobre.all(function(data) {
			$localstorage.setObject('sobre', data);
			$scope.sobre = data;
			$scope.$broadcast('scroll.refreshComplete');
		});
	}
	
	var sobre = $localstorage.getObject('sobre');

	if(angular.equals({}, sobre)) {
		$scope.update();
	} else {
		$scope.sobre = sobre;
	}
	
});
