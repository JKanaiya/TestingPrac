const AnalyzeArray = function (arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  const min = arr[0];

  const max = arr[arr.length - 1];

  const sum = arr.reduce(function (prev, curr) {
    return prev + curr;
  });
  const mean = sum / arr.length;

  const length = arr.length;

  return {
    min,
    mean,
    max,
    length,
  };
};

module.exports = AnalyzeArray;
