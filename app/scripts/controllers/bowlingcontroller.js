'use strict';

angular.module('angularBowlingApp').controller('BowlingController', function($scope, BowlingGame)
{
    $scope.game = BowlingGame;

    $scope.roll = function(pins)
    {
        $scope.game.roll(pins);
    }
});