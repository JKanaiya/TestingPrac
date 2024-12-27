const reverseString = require("./reverseString");

test("reverse string", () => {
  let tests = [
    {
      val: "random",
      exp: "modnar",
    },
    {
      val: "string",
      exp: "gnirts",
    },
    {
      val: "mouse",
      exp: "esuom",
    },
    {
      val: "bank",
      exp: "knab",
    },
    {
      val: "vim",
      exp: "miv",
    },
  ];
  tests.forEach((test) => {
    expect(reverseString(test.val)).toBe(test.exp);
  });
});
