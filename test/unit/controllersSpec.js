'use strict';

/* jasmine specs for controllers go here */

describe('vantageApp controllers', function() {
  
  describe('ProductsCtrl', function(){
    var scope, ctrl;
  
    beforeEach(module('vantageApp'));
  
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('ProductsCtrl', {$scope:scope});
    }));
 
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('result[0].name');
    });
  });
});