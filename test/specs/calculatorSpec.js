(function() {
  define(['calculator', 'lodash'], function(Calculator, _) {
    return describe("Calculator", function() {
      var calc;
      calc = {};
      beforeEach(function() {
        return calc = new Calculator();
      });
      return describe("the add method", function() {
        return it("should add two positive numbers correctly", function() {
          return expect(calc.add(4, 5)).toEqual(9);
        });
      });
    });
  });

}).call(this);
