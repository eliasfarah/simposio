angular.module('simposio.controllers', ['uiGmapgoogle-maps'])

.controller('ProgramacaoController', function($scope, Programacoes, $localstorage) {
	
	$scope.update = function() {
		Programacoes.all(function(data) {
			$localstorage.setObject('programacoes', data);
			$scope.programacoes = data;
		});
	}
	
	var programacoes = $localstorage.getObject('programacoes');
		
	if(angular.equals({}, programacoes)) {
		$scope.update();
	} else {
		$scope.programacoes = programacoes;
	}
	
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

.controller('SobreController', function($scope, Sobre, $localstorage) {
	// $scope.update = function() {
		// Sobre.all(function(data) {
			// $localstorage.setObject('sobre', data);
			// $scope.sobre = data;
		// });
	// }
	
	var sobre = $localstorage.getObject('sobre');
	console.log(sobre.descricao);
	// if(angular.equals({}, sobre)) {
		// $scope.update();
	// } else {
		// $scope.sobre = sobre;
	// }
	
});
