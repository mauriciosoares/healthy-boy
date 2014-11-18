var Fruit = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'apple');

  // some configuration
  this.anchor.setTo(0.5, 0.5);
  this.inputEnabled = true;
  this.scale.setTo(0);

  // events
  this.addAnimation();
  this.addEvents();
};

Fruit.prototype = Object.create(Phaser.Sprite.prototype);
Fruit.prototype.constructor = Fruit;

Fruit.prototype.addAnimation = function() {
  this.game.add.tween(this.scale)
    .to({ x: 1, y: 1 }, 200)
    .to({ x: 0.9, y: 0.9 }, 100)
    .to({ x: 1, y: 1 }, 100)
    .start();

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

Fruit.prototype.addEvents = function() {
  this.events.onInputDown.add(this.clicked, this);
};

Fruit.prototype.clicked = function() {
  this.game.add.tween(this.scale)
    .to({ x: 1.1, y: 1.1 }, 100)
    .to({ x: 0, y: 0 }, 100)
    .start();

  // little trick, since oncomplete was not
  // working as i expected
  setTimeout(function() {
    this.kill();
  }.bind(this), 200);
};
