// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function createNumericMap() {
    const numericMap = new Map();
    numericMap.set("a", 11);
    numericMap.set("b", 21);
    numericMap.set("c", 31);
    numericMap.set("d", 41);
    numericMap.set("e", 51);
    numericMap.set("f", 12);
    numericMap.set("g", 22);
    numericMap.set("h", 32);
    numericMap.set("i", 42);
    numericMap.set("j", 42);
    numericMap.set("k", 52);
    numericMap.set("l", 13);
    numericMap.set("m", 23);
    numericMap.set("n", 33);
    numericMap.set("o", 43);
    numericMap.set("p", 53);
    numericMap.set("q", 14);
    numericMap.set("r", 24);
    numericMap.set("s", 34);
    numericMap.set("t", 44);
    numericMap.set("u", 54);
    numericMap.set("v", 15);
    numericMap.set("w", 25);
    numericMap.set("x", 35);
    numericMap.set("y", 45);
    numericMap.set("z", 55);
    return numericMap;
  }
  function createAlphaMap() {
    const alphaMap = new Map();
    alphaMap.set(11, "a");
    alphaMap.set(21, "b");
    alphaMap.set(31, "c");
    alphaMap.set(41, "d");
    alphaMap.set(51, "e");
    alphaMap.set(12, "f");
    alphaMap.set(22, "g");
    alphaMap.set(32, "h");
    alphaMap.set(42, "i");
    alphaMap.set(42, "j");
    alphaMap.set(42, "k");
    alphaMap.set(13, "l");
    alphaMap.set(23, "m");
    alphaMap.set(33, "n");
    alphaMap.set(43, "o");
    alphaMap.set(53, "p");
    alphaMap.set(14, "q");
    alphaMap.set(24, "r");
    alphaMap.set(34, "s");
    alphaMap.set(44, "t");
    alphaMap.set(54, "u");
    alphaMap.set(15, "v");
    alphaMap.set(25, "w");
    alphaMap.set(35, "x");
    alphaMap.set(45, "y");
    alphaMap.set(55, "z");
    return alphaMap;
  }

  function encodePolybius(input) {
    let strResults = "";
    const numericMap = createNumericMap();

    for (let val of input) {
      // For every character, check if it is alpha
      let index = numericMap.get(val);
      if (index != undefined) {
        // Add the polybius conversion to the output
        strResults += index;
      } else {
        // Add the non-alpha character to the output
        strResults += val;
      }
    }
    return strResults;
  }

  function decodePolybius(input) {
    let strResults = "";
    const alphaMap = createAlphaMap();
    // For this assignment we are assuming only alpha characters and spaces
    // so split the string based on spaces.
    const arrayInput = input.split(" ");
    const inputLength = arrayInput.length; // Save the array length
    let count = 1; // This counter is used to add the correct number of spaces

    for (let vals of arrayInput) {
      // Check for even number of characters
      if (vals.length % 2 !== 0) {
        return false;
      }

      // This for loop will pull 2 characters at a
      // time from the array and test if they represent
      // an alpha character.
      for (let x = 0; x < vals.length; x += 2) {
        let strTest = `${vals[x]}${vals[x + 1]}`;
        let chFound = alphaMap.get(+strTest);
        if (chFound !== undefined) {
          // Test the special case for i and j
          if (+strTest === 42) {
            strResults += "(i/j)";
          } else {
            strResults += chFound;
          }
        }
      }
      // Add in any missing spaces
      if (arrayInput.length > 0 && count < inputLength) {
        strResults += " ";
        count++;
      }
    }
    return strResults;
  }

  function polybius(input, encode = true) {
    // your solution code here
    if (encode) {
      return encodePolybius(input.toLowerCase());
    } else {
      return decodePolybius(input.toLowerCase());
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
