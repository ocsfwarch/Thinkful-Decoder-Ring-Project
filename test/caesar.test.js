// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Ceasar shift testing", () => {
  it("It returns false if the shift value is equal to 0", () => {
    const strInput = "test message";
    const nShift = 0;
    const results = caesar(strInput, nShift);
    expect(results).to.be.false;
  });
  it("It returns false if the shift value is less than -25", () => {
    const strInput = "test message";
    const nShift = -26;
    const results = caesar(strInput, nShift);
    expect(results).to.be.false;
  });
  it("It returns false if the shift value is not present", () => {
    const strInput = "test message";
    const results = caesar(strInput);
    expect(results).to.be.false;
  });
  it("It ignores capital letters.", () => {
    const strMessage1 = "test message";
    const strMessage2 = "TEST MESSAGE";
    const nShift = 3;
    const strExpected = "whvw phvvdjh";
    const results1 = caesar(strMessage1, nShift);
    const results2 = caesar(strMessage2, nShift);

    expect(results1).to.equal(strExpected);
    expect(results2).to.equal(strExpected);
    expect(results1).to.equal(results2);
  });
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    const strMessage = "test message";
    const nShift = 3;
    const strExpected = "whvw phvvdjh";
    const results1 = caesar(strMessage, nShift);
    const results2 = caesar(strExpected, nShift, false);

    expect(results1).to.equal(strExpected);
    expect(results2).to.equal(strMessage);
  });
});
