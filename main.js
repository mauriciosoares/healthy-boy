var GameState = function() {};

GameState.prototype.preload = function() {
  this.game.load.image('apple', 'apple.png');
};

GameState.prototype.create = function() {
  this.game.stage.backgroundColor = 0x4488cc;

  this.addFruit();
};

GameState.prototype.addFruit = function() {
  var fruit = new Fruit(this.game);
  this.game.add.existing(fruit);

  // when killed, add another fruit :)
  fruit.on('kill', this.addFruit, this);
};

var game = new Phaser.Game(320, 568, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
