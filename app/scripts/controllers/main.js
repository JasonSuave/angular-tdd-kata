'use strict';

/**
 * @ngdoc function
 * @name angularBowlingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBowlingApp
 */
angular.module('angularBowlingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
