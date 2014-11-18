var GameState = function() {};

GameState.prototype.preload = function() {
  this.game.load.image('apple', 'apple.png');
};

GameState.prototype.create = function() {
  this.game.stage.backgroundColor = 0x4488cc;

  var fruit = new Fruit(this.game, 10, 10);
  this.game.add.existing(fruit);
};

var game = new Phaser.Game(320, 568, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
