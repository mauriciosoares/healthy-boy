(function(root) {
  var Helpers = {};

  Helpers.formatNumber = function(number) {
    var n = number.toString();

    return parseFloat(n.slice(0, -2) + '.' + n.slice(-2), 10);
  };

  root.Helpers = Helpers;
} (this));
