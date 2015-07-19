angular.module('simposio.controllers', [])

.controller('ProgramacaoController', function($scope, Programacoes, $localstorage, $utils) {
	$utils.show();
	$scope.update = function() {
		Programacoes.all(function(data) {
			$localstorage.setObject('programacoes', data);
			$scope.programacoes = data;
			$scope.$broadcast('scroll.refreshComplete');
			$utils.hide();
		});
	}
	
	var programacoes = $localstorage.getObject('programacoes');

	if(angular.equals({}, programacoes)) {
		$scope.update();
	} else {
		$scope.programacoes = programacoes;
		$utils.hide();
	}
	
})

.controller('ProgramacaoDetalhesController', function($scope, $stateParams, $localstorage, Programacoes, $utils) {
	$utils.show();
	var buscarProgramacao = function(programacoes, programacaoId) {
		var result;
		angular.forEach(programacoes, function(programacao, data) {
			angular.forEach(programacao, function(palestra, keyprog) {
				if(palestra.id == programacaoId) {
					palestra.data = data;
					result = palestra;
					return ;
				}
			});			
		});
		return result;
	}	
	
	$scope.update = function() {
		Programacoes.all(function(data) {
			$localstorage.setObject('programacoes', data);
			$scope.$broadcast('scroll.refreshComplete');
			$utils.hide();
			return data;
		});
	}
	
	var programacoes = $localstorage.getObject('programacoes');
	
	if(angular.equals({}, programacoes)) {
		programacoes = $scope.update();
		$scope.palestra = buscarProgramacao($scope.programacoes, $stateParams.programacaoId);		
	} else {
		$scope.palestra = buscarProgramacao(programacoes, $stateParams.programacaoId);
		$utils.hide();
	}	
})

.controller('PalestrantesController', function($scope, Palestrantes, $localstorage, $utils){
	$utils.show();
	$scope.update = function() {
		Palestrantes.all(function(data) {
			$localstorage.setObject('palestrantes', data);
			$scope.palestrantes = data;
			$scope.$broadcast('scroll.refreshComplete');
			$utils.hide();
		});
	}
	
	var palestrantes = $localstorage.getObject('palestrantes');
		
	if(angular.equals({}, palestrantes)) {
		$scope.update();
	} else {
		$scope.palestrantes = palestrantes;
		$utils.hide();
	}	
})

.controller('PalestranteDetalhesController', function($scope, $stateParams, Palestrantes, $utils) {
	$utils.show();
	Palestrantes.all(function(data){
		$scope.palestrante = data[$stateParams.palestranteId];
		$utils.hide();
	});
})

.controller('LocalizacaoController', function($scope, Localizacao, $utils, $compile) {
	$utils.show();
	/* Atualização ajax */
	$scope.update = function() {
		Localizacao.all(function(data) {
			$scope.localizacao = data;
			$scope.initialize();
			$utils.hide();
		});
	}
			
	$scope.update();

	/* Inicializa Google Maps */
	$scope.initialize = function () {
		var myLatlng = new google.maps.LatLng($scope.localizacao.lat,$scope.localizacao.longi, $utils);
		
		var mapOptions = {
			center: myLatlng,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		/* Cria o balão */
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Localização do Evento'
		});
		/* Cria texto do balão */
		var contentString = "<div>"+$scope.localizacao.endereco+"</div>";
        var compiled = $compile(contentString)($scope);	
		var infowindow = new google.maps.InfoWindow({
			content: compiled[0]
        });
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});

		$scope.map = map;
	}
})

.controller('PremioController', function($scope, Sobre, $localstorage, $utils) {

})

.controller('SobreController', function($scope, Sobre, $localstorage, $utils) {
	$utils.show();
	$scope.update = function() {
		Sobre.all(function(data) {
			$localstorage.setObject('sobre', data);
			$scope.sobre = data;
			$scope.$broadcast('scroll.refreshComplete');
			$utils.hide();
		});
	}
	
	var sobre = $localstorage.getObject('sobre');

	if(angular.equals({}, sobre)) {
		$scope.update();
	} else {
		$scope.sobre = sobre;
	}
	$utils.hide();
});