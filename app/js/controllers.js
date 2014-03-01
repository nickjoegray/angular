'use strict';

/* Controllers */

var vantageApp = angular.module('vantageApp', []);

vantageApp.controller('SomeCtrl', function($scope) {
  $scope.names = [
    {'firstName': 'Nick',
    'lastName': 'Gray'},
    {'firstName': 'Damian',
    'lastName': 'Matheson'},
    {'firstName': 'Matt',
    'lastName': 'Gray'},
    {'firstName': 'Nick',
    'lastName': 'Gray'},
    {'firstName': 'Damian',
    'lastName': 'Matheson'},
    {'firstName': 'Matt',
    'lastName': 'Gray'}
  ];
});
