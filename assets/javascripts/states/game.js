(function(root) {
  'use strict';

  // Constants
  var IMAGES_PATH = 'assets/images/',
    SOUNDS_PATH = 'assets/sounds/';

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

    // constants
    this.DIFFICULT_2 = 5;
    this.DIFFICULT_3 = 10;

    this.addTimer();
    this.addFruit();

    this.points = new Points(this.game);
  };

  GameState.prototype.update = function() {

  };

  GameState.prototype.addTimer = function() {
    this.timer = new Timer(this.game);
    this.game.add.existing(this.timer);
  };

  GameState.prototype.addFruit = function() {
    var fruitType = 1;
    if(Fruit.killed >= this.DIFFICULT_2 && Fruit.killed < this.DIFFICULT_3) {
      fruitType = Phaser.GAMES[0].rnd.integerInRange(1, 2);
    } else if(Fruit.killed >= this.DIFFICULT_3) {
      fruitType = Phaser.GAMES[0].rnd.integerInRange(1, 3);
    }

    var fruit = new Fruit(this.game, this.timer, fruitType);
    this.game.add.existing(fruit);

    // when killed, add another fruit :)
    fruit.on('kill', this.onKill, this);
  };

  GameState.prototype.onKill= function(fruit) {
    this.points.increase(fruit.type);
    this.addFruit();
  };

  root.GameState = GameState;
} (this));
