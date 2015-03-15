'use strict';
describe("Game", function () {
    var game;

    /*
     |--------------------------------------------------------------------------
     | Setup and Tear Down
     |--------------------------------------------------------------------------
     */

    beforeEach(function () {
        game = new BowlingGame();
    });

    /*
     |--------------------------------------------------------------------------
     | Test Suite
     |--------------------------------------------------------------------------
     */

    it("has an initial score of 0", function () {
        expect(game.score()).toBe(0);
    });

    it("can keep score of an entire game", function () {
        rollMany(20, 1);
        expect(game.score()).toBe(20);
    });

    it("can keep score of a gutter game", function () {
        rollMany(20, 0);
        expect(game.score()).toBe(0);
    });

    it("can keep score of a game with a single spare", function () {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        game.roll(8);
        rollMany(6, 0);
        expect(game.score()).toBe(24);
    });

    it("can keep score of a game with a single strike", function () {
        game.roll(10);
        game.roll(3);
        game.roll(2);
        rollMany(6, 0);
        expect(game.score()).toBe(20);
    });

    it("can keep score of a perfect game", function () {
        rollMany(11, 10);
        expect(game.score()).toBe(300);
    });

    it("can keep score of a game with a final strike", function()
    {
        rollMany(18, 0);
        game.roll(10); // 12
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        expect(game.score()).toBe(16);
    });

    it("can keep score of a game with a final spare", function()
    {
        rollMany(18, 0);
        game.roll(7);
        game.roll(3); // 11
        game.roll(4);
        game.roll(2);
        expect(game.score()).toBe(20)
    });

    /*
     |--------------------------------------------------------------------------
     | Helper functions
     |--------------------------------------------------------------------------
     */


    function rollMany(numberOfRolls, pinsKnockedDown) {
        for (var i = 0; i < numberOfRolls; i++) {
            game.roll(pinsKnockedDown);
        }
    }
});