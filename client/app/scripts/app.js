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
  
	.module('clientApp', [
    'ngRoute',
		'restangular'
  ])
  
	.config(function ($routeProvider, RestangularProvider) {
    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

		$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

	//MovieRestangular Factory:
	//Restangular expects id and NOT _id.
	//This factory changes _id to id
	.factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })

	//Movie Factory: 
	//Creates a Movie which has been _id changed to id
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  });

