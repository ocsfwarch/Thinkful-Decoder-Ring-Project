// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius testing", () => {
  it("It ignores capital letters.", () => {
    const strInput1 = "MESSAGE";
    const strInput2 = "message";
    const strExpected = "23513434112251";
    const strResults1 = polybius(strInput1);
    const strResults2 = polybius(strInput2);

    expect(strResults1).to.equal(strExpected);
    expect(strResults2).to.equal(strExpected);
    expect(strResults1).to.equal(strResults2);
  });

  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const strMessage = "test message";
    const strExpected = "44513444 23513434112251";
    const results1 = polybius(strMessage);
    const results2 = polybius(strExpected, false);

    expect(results1).to.equal(strExpected);
    expect(results2).to.equal(strMessage);
  });

  it("When encoding, it translates the letters i and j to 42.", () => {
    const strMessage = "IJ";
    const strExpected = "4242";
    const results = polybius(strMessage);
    expect(results).to.equal(strExpected);
  });

  it("When decoding, it translates 42 to (i/j).", () => {
    const strMessage = "4432423352125413";
    const strExpected = "th(i/j)nful";
    const results = polybius(strMessage, false);
    expect(results).to.equal(strExpected);
  });
});
