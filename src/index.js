const { reporters } = require("mocha");

module.exports = function check(str, bracketsConfig) {
  let mass = str.split('');
  if (mass.length%2 != 0) {
    return false;
  } else {
    for (let i = 0; i < mass.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (mass[i] === bracketsConfig[j][1] && mass[i-1] === bracketsConfig[j][0]) {
          mass.splice([i-1], 2);
          i = i - 2;
        }
      }
    }
    if (mass.length === 0) {
      return true
    } else {
      return false
    }
  }
}