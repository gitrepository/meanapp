'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
		$scope.movieList = [{
			title: '** Lava - Please watch',
			description: 'Pixar Short FIlm: Lava',
			category: 'Entertainment'
		}];
  });
