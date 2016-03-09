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
  });
