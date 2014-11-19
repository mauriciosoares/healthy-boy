var Fruit = function(game, timer, fruitType) {
  Phaser.Sprite.call(this, game, 0, 0, 'fruit-' + fruitType);

  this.fruitType = fruitType;

  var x = game.rnd.integerInRange(this.width / 2, game.width - this.width / 2),
    y = game.rnd.integerInRange(this.width / 2, game.height - this.width / 2);

  this.timer = timer;

  this.position.x = x;
  this.position.y = y;

  // some configuration
  this.customEvents = {};
  this.anchor.setTo(0.5, 0.5);
  this.inputEnabled = true;
  this.scale.setTo(0);

  // add sound

  this.crunch = game.add.audio('crunch');

  // events
  this.addAnimation();
  this.addEvents();
};

Fruit.killed = 0;

Fruit.prototype = Object.create(Phaser.Sprite.prototype);
Fruit.prototype.constructor = Fruit;

Fruit.prototype.on = function(index, callback, context) {
  this.customEvents[index] = callback.bind(context);
};

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
  setTimeout(this.killEvent.bind(this), 200);
};

Fruit.prototype.killEvent = function() {
  this.timer.increase(this.fruitType);
  Fruit.killed += 1;
  this.crunch.play();
  this.kill();
  this.customEvents.kill();
};
