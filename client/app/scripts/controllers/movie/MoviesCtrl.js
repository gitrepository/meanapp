'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
		//'Movie' corresponds to factory: Movie
    Movie.getList().then(function(movies) {
      angular.forEach(movies, function(movie) {
				//In ordere to play youTube videos in embeded mode
        if(movie.url.indexOf('watch?v=') > 0){
          movie.url = movie.url.replace('watch?v=', 'embed/');
        }
      });
			//For some reason $scope.movies doesn't work.
			//Looks like there is a conflict with file name (movies.html)
      $scope.movieList = movies;
    });
  });
