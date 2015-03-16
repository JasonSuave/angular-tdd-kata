'use strict';

angular.module('angularBowlingApp').controller('BowlingController', function($scope, game)
{
    $scope.game = game;

    $scope.roll = function(pins)
    {
        $scope.game.roll(pins);
    }

    $scope.newGame = function()
    {
        $scope.game.reset();
    }
});