(function() {
  'use strict';

  // console.log(window.innerHeight);
  // console.log(window.innerWidth);

  var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');
  game.state.add('game', GameState, true);
} ());
