const capitalize = require("./capiatalize");

test("capitalize", () => {
  let tests = [
    { val: "string", exp: "String" },
    { val: "banana", exp: "Banana" },
    { val: "random", exp: "Random" },
  ];
  tests.forEach((n) => expect(capitalize(n.val)).toBe(n.exp));
});
