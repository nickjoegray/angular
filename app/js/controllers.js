'use strict';

/* Controllers */

var vantageApp = angular.module('vantageApp', []);

vantageApp.controller('ProductsCtrl', function($scope, $http) {
  $http.get('json/products.json').success(function(data) {
    $scope.products = data;
  });

  $scope.orderProp = 'result[0].name';
});
