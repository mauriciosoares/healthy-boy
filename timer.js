var Timer = function(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'timer');
};

Timer.prototype = Object.create(Phaser.Sprite.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.update = function() {
  // console.log('hue');
};
