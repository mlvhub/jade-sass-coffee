(function() {
  define([], function() {
    var Calculator;
    return Calculator = (function() {
      function Calculator() {}

      Calculator.prototype.add = function(arr) {
        return arr.reduce(function(x, y) {
          return x + y;
        });
      };

      return Calculator;

    })();
  });

}).call(this);
