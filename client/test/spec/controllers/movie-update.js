'use strict';

describe('Controller: MovieUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieUpdateCtrl = $controller('MovieUpdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieUpdateCtrl.awesomeThings.length).toBe(3);
  });
});
