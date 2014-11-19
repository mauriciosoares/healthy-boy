var GameState = function() {};

GameState.prototype.preload = function() {
  this.game.load.image('apple', 'apple.png');

  this.game.load.image('timer', 'timer.jpg');

  this.game.load.audio('crunch', 'crunch.mp3');
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
  var fruit = new Fruit(this.game, this.timer);
  this.game.add.existing(fruit);

  // when killed, add another fruit :)
  fruit.on('kill', this.addFruit, this);
};

var game = new Phaser.Game(320, 568, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
