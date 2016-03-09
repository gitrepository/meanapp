'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Movie-DeleteCtrl', function(
    $scope,
    $stateParams,
    Movie,
    $location
  ) {
    $scope.movie = Movie.one($stateParams.id).get().$object;
    $scope.deleteMovie = function() {
      $scope.movie.remove().then(function() {
        $location.path('/movies');
      });
    };
    $scope.back = function() {
      $location.path('/movie/' + $stateParams.id);
    };
  });