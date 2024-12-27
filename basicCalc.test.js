const calc = require("./basicCalc");

test("add", () => {
  expect(calc.add(1, 2)).toBe(3);
  expect(calc.add(5, 2)).toBe(7);
  expect(calc.add(4, 2)).toBe(6);
  expect(calc.add(-4, 2)).toBe(-2);
});

test("subtract", () => {
  expect(calc.subtract(2, 1)).toBe(1);
  expect(calc.subtract(4, 1)).toBe(3);
  expect(calc.subtract(6, 1)).toBe(5);
  expect(calc.subtract(1, 6)).toBe(-5);
});

test("mulitply", () => {
  expect(calc.multiply(3, 2)).toBe(6);
  expect(calc.multiply(6, 2)).toBe(12);
  expect(calc.multiply(3, 3)).toBe(9);
});

test("divide", () => {
  expect(calc.divide(10, 2)).toBe(5);
  expect(calc.divide(10, 5)).toBe(2);
  expect(calc.divide(20, 2)).toBe(10);
  expect(calc.divide(20, 0)).toBe("Do not Divide by 0 buddy");
  expect(calc.divide(8, 10)).toBe(8 / 10);
});
