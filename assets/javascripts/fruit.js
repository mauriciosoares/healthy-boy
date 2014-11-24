(function(root) {
  'use strict';

  var Fruit = function(config) {
    Phaser.Sprite.call(this, config.game, 0, 0, 'fruit-' + config.type);

    // common configs
    this.game = config.game;
    this.timer = config.timer;
    this.type = config.type;
    this.dead = false;
    this.customEvents = {};
    this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;
    this.crunch = this.game.add.audio('crunch');

    var x = this.game.rnd.integerInRange(this.width / 2, this.game.width - this.width / 2),
      y = this.game.rnd.integerInRange(this.width / 2, this.game.height - this.width / 2);

    this.scale.setTo(0);

    this.position.x = x;
    this.position.y = y;

    // events
    this.addAnimation();
    this.addEvents();
  };

  Fruit.killed = 0;

  Fruit.prototype = Object.create(Phaser.Sprite.prototype);
  Fruit.prototype.constructor = Fruit;

  Fruit.prototype.on = function(index, callback, context) {
    this.customEvents[index] = callback.bind(context, this);
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
    if(this.dead) return;
    this.game.add.tween(this.scale)
      .to({ x: 1.1, y: 1.1 }, 100)
      .to({ x: 0, y: 0 }, 100)
      .start();

    // little trick, since oncomplete was not
    // working as i expected
    setTimeout(this.killEvent.bind(this), 200);
    this.dead = true;
  };

  Fruit.prototype.killEvent = function() {
    this.timer.increase(this.type);
    Fruit.killed += 1;
    this.crunch.play();
    this.kill();

    this.customEvents.kill();
  };

  root.Fruit = Fruit;
} (this));
