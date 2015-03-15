'use strict';

describe('Controller: BowlingController', function () {

    // load the controller's module
    beforeEach(module('angularBowlingApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        // Setup a Mock of our service / model
        this.BowlingGameMock = {
            roll: function(pins) {

            }
        };

        spyOn(this.BowlingGameMock, 'roll');

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
    })
});
