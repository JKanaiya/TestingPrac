const caesarCipher = function (string, key) {
  const isLetter = function (c) {
    return c.toLowerCase() != c.toUpperCase();
  };

  const isPunctuation = function (p) {
    let pattern = /[^\w]+/;
    return pattern.test(p);
  };

  let temp = "";
  for (let i = 0; i < string.length; i++) {
    if (isPunctuation(string.charAt(i))) temp += string.charAt(i);
    else if (!isLetter(String.fromCharCode(string.charCodeAt(i) + key)))
      temp += String.fromCharCode(string.charCodeAt(i) - 26 + key);
    else temp += String.fromCharCode(string.charCodeAt(i) + key);
  }
  return temp;
};

module.exports = caesarCipher;
