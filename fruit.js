var Fruit = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'apple');

  this.addAnimation();
};

Fruit.prototype = Object.create(Phaser.Sprite.prototype);
Fruit.prototype.constructor = Fruit;

Fruit.prototype.addAnimation = function() {
  this.game.add.tween(this)
    .to({ y: this.y + 5 }, 1000, Phaser.Easing.Sinusoidal.InOut)
    .to({ y: this.y - 5 }, 1000, Phaser.Easing.Sinusoidal.InOut)
    .start()
    .loop();
};

Fruit.prototype.update = function() {
  // console.log('fruit');
  // console.log(this.x);
  // console.log(this.game);
};
