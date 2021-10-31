// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Testing for substitution functionality", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    const strMessage = "test message";
    const strAlphabet = "abcdefghijklmnopqrs";
    const results = substitution(strMessage, strAlphabet);
    expect(results).to.be.false;
  });
  it("It returns false if there are any duplicate characters in the given alphabet.", () => {
    const strMessage = "test message";
    const strAlphabet = "abbbbcdefghijklmnopqrs";
    const results = substitution(strMessage, strAlphabet);
    expect(results).to.be.false;
  });
  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const strMessage = "test message";
    const strAlphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const strExpected = "jsij ysii.rs";
    const results1 = substitution(strMessage, strAlphabet);
    const results2 = substitution(strExpected, strAlphabet, false);
    expect(results1).to.equal(strExpected);
    expect(results2).to.equal(strMessage);
  });
  it("It ignores capital letters.", () => {
    const strMessage1 = "test message";
    const strMessage2 = "TEST MESSAGE";
    const strAlphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const strExpected = "jsij ysii.rs";
    const results1 = substitution(strMessage1, strAlphabet);
    const results2 = substitution(strMessage2, strAlphabet);

    expect(results1).to.equal(strExpected);
    expect(results2).to.equal(strExpected);
    expect(results1).to.equal(results2);
  });
});
