(function(root) {
  'use strict';

  // Constants
  var IMAGES_PATH = '/assets/images/',
    SOUNDS_PATH = '/assets/sounds/';

  var GameState = function() {};

  GameState.prototype.preload = function() {
    // loads all fruits assets
    this.game.load.image('fruit-1', IMAGES_PATH + 'fruit-1.png');
    this.game.load.image('fruit-2', IMAGES_PATH + 'fruit-2.png');
    this.game.load.image('fruit-3', IMAGES_PATH + 'fruit-3.png');

    this.game.load.image('timer', IMAGES_PATH + 'timer.jpg');

    this.game.load.audio('crunch', SOUNDS_PATH + 'crunch.mp3');
  };

  GameState.prototype.create = function() {
    this.game.stage.backgroundColor = 0x4488cc;

    this.addTimer();
    this.addFruit();
  };

  GameState.prototype.update = function() {
    // console.log('update');
  };

  GameState.prototype.addTimer = function() {
    this.timer = new Timer(this.game);
    this.game.add.existing(this.timer);
  };

  GameState.prototype.addFruit = function() {
    var fruit = new Fruit(this.game, this.timer, 1);
    this.game.add.existing(fruit);

    // when killed, add another fruit :)
    fruit.on('kill', this.addFruit, this);
  };

  root.GameState = GameState;
} (this));
