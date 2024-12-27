const AnalyzeArray = require("./ArrayStuff");

const testArr = [1, 3, 5, 7, 6, 9, 2, 4];

const testArr2 = [1, 30, 5, 7, 6, 9, 2, 4, 0];

let a = AnalyzeArray(testArr);

let b = AnalyzeArray(testArr2);

test("Array Test", () => {
  expect(a).toEqual({
    mean: 4.625,
    min: 1,
    max: 9,
    length: 8,
  });
  expect(b).toEqual({
    mean: 7.111111111111111,
    min: 0,
    max: 30,
    length: 9,
  });
});
