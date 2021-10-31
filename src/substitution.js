// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function buildNumericMap(alphabet) {
    const theMap = new Map();
    let count = 1;
    const arrAlphabet = alphabet.split("");
    for (let val of arrAlphabet) {
      theMap.set(val, count++);
    }
    return theMap;
  }

  function substitution(input, alphabet, encode = true) {
    let strResults = "";
    let strBaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let strRefAlphabet = "";
    let numericMap = null;

    // Test for correct length of alphabet
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    // Test that alphabet does not include duplicates
    const alphabetSet = new Set(alphabet.split(""));
    if (alphabetSet.size !== 26) {
      return false;
    }

    if (encode) {
      numericMap = buildNumericMap(strBaseAlphabet);
      strRefAlphabet = alphabet;
    } else {
      numericMap = buildNumericMap(alphabet);
      strRefAlphabet = strBaseAlphabet;
    }

    const strInput = input.toLowerCase();
    for (let val of strInput) {
      let index = numericMap.get(val);
      if (index != undefined) {
        strResults += strRefAlphabet[index - 1];
      } else {
        strResults += val;
      }
    }

    return strResults;
  } // End substitution

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
