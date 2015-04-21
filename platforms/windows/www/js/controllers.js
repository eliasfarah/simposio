angular.module('simposio.controllers', ['uiGmapgoogle-maps'])

.controller('ProgramacaoController', function($scope, Programacoes) {
	Programacoes.all(function(data) {
		$scope.programacoes = data;
	});
})

.controller('PalestrantesController', function($scope, Palestrantes){
	Palestrantes.all(function(data){
		$scope.palestrantes = data;
	});
})

.controller('PalestranteDetalhesController', function($scope, $stateParams, Palestrantes) {
	Palestrantes.all(function(data){
		$scope.palestrante = data[$stateParams.palestranteId];
	});
})

.controller('LocalizacaoController', function($scope) {
	$scope.map = {center: {latitude: -23.555935, longitude: -46.632508 }, zoom: 17 };
	$scope.marker = {
	  id: 0,
	  coords: {
	    latitude: -23.555935,
	    longitude: -46.632508
	  },
	  options: { draggable: false }
	};
})

.controller('SobreController', function($scope, Sobre) {
	Sobre.all(function(data) {
		$scope.sobre = data;
	});
});
