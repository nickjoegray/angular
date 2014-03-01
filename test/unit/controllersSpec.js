'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

  describe('SomeCtrl', function(){

    beforeEach(module('vantageApp'));

    it('should create "names" model with 2 names', inject(function($controller) {
      var scope = {},
          ctrl = $controller('SomeCtrl', {$scope:scope});

      expect(scope.names.length).toBe(6);
    }));

  });
});
