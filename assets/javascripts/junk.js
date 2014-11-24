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
    // this.scale.setTo(0);
    this.crunch = this.game.add.audio('crunch');

    var x = this.game.rnd.integerInRange(this.width / 2, this.game.width - this.width / 2),
      y = this.game.rnd.integerInRange(this.height / 2, this.game.height - this.height / 2);

    this.position.x = x;
    this.position.y = y;

    console.log(this.overlap(config.fruit));
    console.log(config.fruit);
    // events
    // this.addAnimation();
    // this.addEvents();
  };

  Junk.prototype = Object.create(Phaser.Sprite.prototype);
  Junk.prototype.constructor = Junk;

  root.Junk = Junk;
} (this));
