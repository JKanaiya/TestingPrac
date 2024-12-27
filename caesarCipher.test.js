const caesarCipher = require("./caesarCipher");
// with a shift of 3
test("Caesar Cipher", () => {
  expect(caesarCipher("random", 3)).toBe("udqgrp");
  expect(caesarCipher("Anomander", 4)).toBe("Ersqerhiv");
  expect(caesarCipher("Malaz", 2)).toBe("Ocncb");
  expect(caesarCipher("MalaZ", 3)).toBe("PdodC");
  expect(caesarCipher("MalaX", 4)).toBe("QepeB");
  expect(caesarCipher("MalaX!", 2)).toBe("OcncZ!");
  expect(caesarCipher("Question? and Answer!", 3)).toBe(
    "Txhvwlrq? dqg Dqvzhu!"
  );
});
