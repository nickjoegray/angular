'use strict';

/* Controllers */

var vantageApp = angular.module('vantageApp', []);

vantageApp.controller('ProductsCtrl', function($scope, $http) {
  // $http({method: 'GET', url: 'http://lcboapi.com/products'}).
  //   success(function(data, status, headers, config) {
  //     $scope.products = data;
  // });

  $scope.orderProp = 'name';

  var url = "http://lcboapi.com/products?callback=JSON_CALLBACK";

  $http.jsonp(url)
    .success(function(data){
        console.log(data);
        $scope.products = data.result;
    });

  for (var i = 0; i < $scope.products.length; i++) {
    console.log(i);
  }
});
