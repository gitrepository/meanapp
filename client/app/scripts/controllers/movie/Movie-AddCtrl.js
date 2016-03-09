'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Movie-AddCtrl', function(
    $scope,
    $location,
		Movie,
		CategoryRef
  ) {
    $scope.movie = {};
    $scope.saveMovie = function() {
      Movie1.post($scope.movie).then(function() {
        $location.path('/movies');
      });
    };
  
		CategoryRef.getList().then(function(cats) {
      $scope.categories = cats;
    });
	
  });
