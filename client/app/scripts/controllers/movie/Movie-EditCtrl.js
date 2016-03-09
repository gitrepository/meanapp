'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Movie-EditCtrl', function(
    $scope,
    $stateParams,
    $location,
    Movie,
		CategoryRef
  ) {
    $scope.editMovie = true;
    $scope.movie = {};
    Movie.one($stateParams.id).get().then(function(movie) {
      $scope.movie = movie;
      $scope.saveMovie = function() {
        $scope.movie.save().then(function() {
          $location.path('/movie-view/' + $stateParams.id);
        });
      };
    });
	
		CategoryRef.getList().then(function(cats) {
      $scope.categories = cats;
    });
	
  });