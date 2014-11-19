var Timer = function(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'timer');

  // constants
  this.TIMER_MAX_WIDTH = this.game.width - 40;
  this.COUNTER_COEFICIENT = 0.3;

  this.setPosition();
};

Timer.prototype = Object.create(Phaser.Sprite.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.setPosition = function() {
  this.x = 20;
  this.y = 20;

  this.width = this.TIMER_MAX_WIDTH;
  this.height = 20;
};

Timer.prototype.update = function() {
  console.log(this.COUNTER_COEFICIENT + Helpers.formatNumber(Fruit.killed));
  this.width -= this.COUNTER_COEFICIENT + Helpers.formatNumber(Fruit.killed);

  if(this.width > this.TIMER_MAX_WIDTH) {
    this.width = this.TIMER_MAX_WIDTH;
  }
};
