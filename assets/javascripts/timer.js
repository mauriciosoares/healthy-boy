(function(root) {
  'use strict';

  var Timer = function(game) {
    Phaser.Sprite.call(this, game, 0, 0, 'timer');

    // constants
    this.TIMER_MAX_WIDTH = this.game.width - 80;
    this.COUNTER_COEFICIENT = 0.8;

    this.setPosition();
  };

  Timer.prototype = Object.create(Phaser.Sprite.prototype);
  Timer.prototype.constructor = Timer;

  Timer.prototype.setPosition = function() {
    this.x = 40;
    this.y = 40;

    this.width = this.TIMER_MAX_WIDTH;
    this.height = 40;
  };

  Timer.prototype.update = function() {
    this.width -= this.COUNTER_COEFICIENT + Helpers.formatNumber('0' + Fruit.killed);

    if(this.width > this.TIMER_MAX_WIDTH) {
      this.width = this.TIMER_MAX_WIDTH;
    }
  };

  Timer.prototype.increase = function(amount) {
    this.width += amount * 20;
  };

  root.Timer = Timer;
} (this));
