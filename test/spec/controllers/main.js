'use strict';

describe('Controller: BowlingController', function () {

    // load the controller's module
    beforeEach(module('angularBowlingApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        // Setup a Mock of our service / model
        this.BowlingGameMock = {
            roll: function(pins) {},
            reset: function(){}
        };

        spyOn(this.BowlingGameMock, 'roll');
        spyOn(this.BowlingGameMock, 'reset');

        // Create the controller
        this.scope = $rootScope.$new();
        this.bowling_controller = $controller('BowlingController', {
            $scope: this.scope,
            game: this.BowlingGameMock
        });
    }));

    it("can perform a roll", function()
    {
        this.scope.roll(1);
        expect(this.BowlingGameMock.roll).toHaveBeenCalledWith(1);
    });

    it("can start a new game", function()
    {
        this.scope.roll(3);
        this.scope.roll(6);
        this.scope.newGame();
        expect(this.BowlingGameMock.reset).toHaveBeenCalled();
    });


});
