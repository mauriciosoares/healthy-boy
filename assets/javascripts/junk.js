(function(root) {
  var Junk = function() {
    Phaser.Sprite.call(this, game, 0, 0, 'fruit-' + type);
  };

  Fruit.prototype = Object.create(Phaser.Sprite.prototype);
  Fruit.prototype.constructor = Fruit;

  root.Junk = Junk;
} (this));
