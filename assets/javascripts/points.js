(function(root) {
  'use strict';

  var Points = function(game) {
    this.points = 0;

    this.pointsText = game.add.text(60, 60, '0', {
      font: '40px Arial',
      fill: '#ffffff'
    });
  };

  Points.prototype = Object.create(Phaser.Text.prototype);
  Points.prototype.constructor = Points;

  Points.prototype.increase = function(amount) {
    this.points += amount;
    this.pointsText.setText(this.points);
  };

  root.Points = Points;
} (this));
