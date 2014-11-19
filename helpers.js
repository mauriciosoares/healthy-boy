(function(root) {
  var Helpers = {};

  Helpers.formatNumber = function(number) {
    var n = number.toString();

    return parseFloat(n.slice(0, -1) + '.' + n.slice(-1), 10);
  };

  root.Helpers = Helpers;
} (this));
