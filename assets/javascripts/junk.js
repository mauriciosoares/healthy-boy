(function(root) {
  var Junk = function(config) {
    Phaser.Sprite.call(this, config.game, 0, 0, 'junk-' + config.type);

    // common configs
    this.game = config.game;
    this.timer = config.timer;
    this.type = config.type;
    this.dead = false;
    this.customEvents = {};
    this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;
    this.scale.setTo(0);
    this.crunch = this.game.add.audio('crunch');

    var x = this.game.rnd.integerInRange(this.width / 2, this.game.width - this.width / 2),
      y = this.game.rnd.integerInRange(this.height / 2, this.game.height - this.height / 2);

    this.position.x = x;
    this.position.y = y;
    // events
    this.addAnimation();
    // this.addEvents();
  };

  Junk.prototype = Object.create(Phaser.Sprite.prototype);
  Junk.prototype.constructor = Junk;

  Junk.prototype.updateXY = function() {
    var x = this.game.rnd.integerInRange(this.width / 2, this.game.width - this.width / 2),
      y = this.game.rnd.integerInRange(this.height / 2, this.game.height - this.height / 2);

    this.position.x = x;
    this.position.y = y;
  };

  Junk.prototype.addAnimation = function() {
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

  root.Junk = Junk;
} (this));
