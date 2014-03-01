'use strict';

/* jasmine specs for controllers go here */

describe('vantageApp controllers', function() {
  
  describe('ProductsCtrl', function(){
    var scope, ctrl, $httpBackend;
  
    beforeEach(module('vantageApp'));
  
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('json/products.json').
          respond([{name: 'Coors Light'}]);

      scope = $rootScope.$new();
          ctrl = $controller('ProductsCtrl', {$scope: scope});
    }));

    it('should create "products" model with 1 product fetched from xhr', function() {
      expect(scope.products).toBeUndefined();
      $httpBackend.flush();

      expect(scope.products).toEqual([{name: 'Coors Light'}]);
    });
 
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('result[0].name');
    });
  });
});