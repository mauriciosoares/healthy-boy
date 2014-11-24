(function(root) {
  'use strict';

  var Points = function(game) {
    this.points = 0;

    this.pointsText = game.add.text(120, 180, '', {
      font: '120px vcr',
      fill: '#ffffff'
    });

    game.time.events.add(1000, function(){
      this.pointsText.setText('0');
      this.pointsText.setText('0');
    }, this);
  };

  Points.prototype = Object.create(Phaser.Text.prototype);
  Points.prototype.constructor = Points;

  Points.prototype.increase = function(amount) {
    this.points += amount;
    this.pointsText.setText(this.points);
  };

  root.Points = Points;
} (this));
