'use strict';

describe('Controller: MovieMovieaddctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieMovieaddctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieMovieaddctrlCtrl = $controller('MovieMovieaddctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieMovieaddctrlCtrl.awesomeThings.length).toBe(3);
  });
});
