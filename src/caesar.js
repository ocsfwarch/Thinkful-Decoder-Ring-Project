// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function createNumericMap() {
    const numericMap = new Map();
    numericMap.set("a", 1);
    numericMap.set("b", 2);
    numericMap.set("c", 3);
    numericMap.set("d", 4);
    numericMap.set("e", 5);
    numericMap.set("f", 6);
    numericMap.set("g", 7);
    numericMap.set("h", 8);
    numericMap.set("i", 9);
    numericMap.set("j", 10);
    numericMap.set("k", 11);
    numericMap.set("l", 12);
    numericMap.set("m", 13);
    numericMap.set("n", 14);
    numericMap.set("o", 15);
    numericMap.set("p", 16);
    numericMap.set("q", 17);
    numericMap.set("r", 18);
    numericMap.set("s", 19);
    numericMap.set("t", 20);
    numericMap.set("u", 21);
    numericMap.set("v", 22);
    numericMap.set("w", 23);
    numericMap.set("x", 24);
    numericMap.set("y", 25);
    numericMap.set("z", 26);
    return numericMap;
  }
  function createAlphaMap() {
    const alphaMap = new Map();
    alphaMap.set(1, "a");
    alphaMap.set(2, "b");
    alphaMap.set(3, "c");
    alphaMap.set(4, "d");
    alphaMap.set(5, "e");
    alphaMap.set(6, "f");
    alphaMap.set(7, "g");
    alphaMap.set(8, "h");
    alphaMap.set(9, "i");
    alphaMap.set(10, "j");
    alphaMap.set(11, "k");
    alphaMap.set(12, "l");
    alphaMap.set(13, "m");
    alphaMap.set(14, "n");
    alphaMap.set(15, "o");
    alphaMap.set(16, "p");
    alphaMap.set(17, "q");
    alphaMap.set(18, "r");
    alphaMap.set(19, "s");
    alphaMap.set(20, "t");
    alphaMap.set(21, "u");
    alphaMap.set(22, "v");
    alphaMap.set(23, "w");
    alphaMap.set(24, "x");
    alphaMap.set(25, "y");
    alphaMap.set(26, "z");
    return alphaMap;
  }

  function caesar(input, shift, encode = true) {
    let strResults = "";

    // your solution code here
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    const numericMap = createNumericMap();
    const alphaMap = createAlphaMap();

    if (!encode) {
      shift *= -1;
    }

    // Convert the input to lowercase
    let strInput = input.toLowerCase();

    // For every alpha character
    for (let val of strInput) {
      let index = numericMap.get(val);
      if (index != undefined) {
        let indexShift = index + shift;
        if (indexShift > 26) {
          indexShift = indexShift - 26;
        } else if (indexShift <= 0) {
          indexShift = indexShift + 26;
        }
        strResults += alphaMap.get(indexShift);
      } else {
        strResults += val;
      }
    }
    return strResults;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
