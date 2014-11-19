(function() {
  'use strict';

  var game = new Phaser.Game(320, 568, Phaser.AUTO, 'game');
  game.state.add('game', GameState, true);
} ());
