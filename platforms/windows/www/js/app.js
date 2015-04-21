angular.module('tabs', ['ionic','simposio.controllers', 'simposio.services'])


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