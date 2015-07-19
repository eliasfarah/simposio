angular.module('simposio', ['ionic','ngCordova','ionic.service.core','ionic.service.push','simposio.controllers', 'simposio.services'])

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID for the server
    app_id: 'd76eca25',
    // The API key all services will use for this app
    api_key: '6236e2025f2c649467b05268c2693d1c98f6686e2993c8f4',
    // Set the app to use development pushes
    dev_push: true
  });
}])

.config(function($stateProvider, $urlRouterProvider) {
	
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.programacao', {
      url: '/programacao',
      views: {
        'tab-programacao': {
          templateUrl: 'tab-programacao.html',
          controller: 'ProgramacaoController'
        }
      }
    })

	.state('tab.programacao-detalhes', {
      url: '/programacao/:programacaoId',
      views: {
        'tab-programacao': {
          templateUrl: 'programacao-detalhes.html',
          controller: 'ProgramacaoDetalhesController'
        }
      }
    })

    .state('tab.programacao-palestrante-detalhes', {
      url: '/programacao-palestrante/:palestranteId',
      views: {
        'tab-programacao': {
          templateUrl: 'palestrante-detalhes.html',
          controller: 'PalestranteDetalhesController'
        }
      }
    })

    .state('tab.palestrantes', {
      url: '/palestrantes',
      views: {
        'tab-palestrantes': {
          templateUrl: 'tab-palestrantes.html',
          controller: 'PalestrantesController'
        }
      }
    })

    .state('tab.palestrante-detalhes', {
      url: '/palestrante/:palestranteId',
      views: {
        'tab-palestrantes': {
          templateUrl: 'palestrante-detalhes.html',
          controller: 'PalestranteDetalhesController'
        }
      }
    })

    .state('tab.localizacao', {
      url: '/localizacao',
      views: {
        'tab-localizacao': {
          templateUrl: 'tab-localizacao.html',
          controller: 'LocalizacaoController'
        }
      }
    })

    .state('tab.sobre', {
      url: '/sobre',
      views: {
        'tab-sobre': {
          templateUrl: 'tab-sobre.html',
          controller: 'SobreController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/programacao');

});