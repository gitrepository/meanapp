'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', ['restangular', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('movies', {
        url: '/movies',
        templateUrl: 'views/movie/movies.html',
        controller: 'MoviesCtrl'
      })
      .state('movie-add', {
        url: '/movie-add',
        templateUrl: 'views/movie/movie-add.html',
        controller: 'Movie-AddCtrl'
      })
		
      .state('movie-view', {
        url: '/movie-view/:id',
        templateUrl: 'views/movie/movie-view.html',
        controller: 'Movie-ViewCtrl'
      })
      .state('movie-edit', {
        url: '/movie-edit/:id',
        templateUrl: 'views/movie/movie-edit.html',
        controller: 'Movie-EditCtrl'
      })
      .state('movie-delete', {
        url: '/movie-delete/:id',
        templateUrl: 'views/movie/movie-delete.html',
        controller: 'Movie-DeleteCtrl'
      });
  })

  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })

  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  })

  .factory('CategoryRefRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })

  .factory('CategoryRef', function(CategoryRefRestangular) {
    return CategoryRefRestangular.service('categoryRef');
  })

  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
