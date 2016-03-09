'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Movie-ViewCtrl', function(
    $scope,
    $stateParams,
    Movie
  ) {
    $scope.viewMovie = true;
    Movie.one($stateParams.id).get().then(function(movie) {
        if(movie.url.indexOf('watch?v=') > 0){
          movie.url = movie.url.replace('watch?v=', 'embed/');
        }
      $scope.movie = movie;
    });
  });