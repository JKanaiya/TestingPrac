const basicCalc = (function () {
  const add = function (a, b) {
    return a + b;
  };

  const subtract = function (a, b) {
    return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  };

  const divide = function (a, b) {
    if (b == 0) return "Do not Divide by 0 buddy";
    return a / b;
  };

  return {
    add,
    multiply,
    subtract,
    divide,
  };
})();

module.exports = basicCalc;
