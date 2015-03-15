'use strict';

function BowlingGame() {
    this.game_points = [];
}


BowlingGame.prototype.bonusPointsForRoll = function(roll) {
    return this.pointsForNextRoll(roll) + this.pointsForNextRoll(roll + 1);
};

BowlingGame.prototype.isStrike = function(roll) {
    return this.pointsForRoll(roll) === 10;
};

BowlingGame.prototype.score = function () {
    var game_score = 0;
    var roll = 0;
    var maximum_frames = 10;
    for (var currentFrame = 0; currentFrame < maximum_frames; currentFrame++) {
        if (currentFrame === 9) {

            if (this.isSpare(roll)) {
                maximum_frames = 11
            } else if (this.isStrike(roll)) {
                maximum_frames = 12;
            }
        }

        if (this.isSpare(roll) || this.isStrike(roll)) {
            game_score += this.pointsForRoll(roll) + this.bonusPointsForRoll(roll);
            roll += this.isStrike(roll) ? 1 : 2;

        } else {
            game_score += this.pointsForRoll(roll) + this.pointsForRoll(roll +1);
            roll += 2;
        }


    }
    return game_score;
};

BowlingGame.prototype.roll = function(pins_knocked_down)
{
    this.game_points.push(pins_knocked_down);
};

BowlingGame.prototype.pointsForRoll = function(roll_index) {
    return this.game_points[roll_index] === undefined ? 0 : this.game_points[roll_index];
};

BowlingGame.prototype.pointsForNextRoll = function(roll) {
    return this.pointsForRoll(roll + 1);
};

BowlingGame.prototype.isSpare = function(roll) {
    return this.pointsForRoll(roll) + this.pointsForNextRoll(roll) === 10;
};
