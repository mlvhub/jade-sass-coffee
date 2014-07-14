(function() {
  define(['lodash'], function(_) {
    var Calculator;
    return Calculator = (function() {
      function Calculator() {}

      Calculator.prototype.add = function() {
        return _.reduce(arguments, function(x, y) {
          return x + y;
        });
      };

      return Calculator;

    })();
  });

}).call(this);
