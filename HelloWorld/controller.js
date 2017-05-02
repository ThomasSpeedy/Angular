'use strict';
// definieren eines Moduls
var helloWorldModule = angular.module("helloWorldModule", []);

// hinzufügen eines Controllers zum Modul
helloWorldModule.controller("HelloWorldController", function ($scope) {
   $scope.name = "World";
});

helloWorldModule.controller('OwnController', function($scope) {
  $scope.num = "99";
  $scope.double = function(value) { return value * 2; };
  $scope.quadrat = function(value) { return value * value; };
});