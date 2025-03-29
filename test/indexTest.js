const assert = require("assert");
const isPalindrome = require("../index"); // Ensure the correct path

describe("isPalindrome", function () {
  it("should return true for palindromes", function () {
    assert.strictEqual(isPalindrome("madam"), true);
    assert.strictEqual(isPalindrome("racecar"), true);
    assert.strictEqual(isPalindrome("level"), true);
  });

  it("should return false for non-palindromes", function () {
    assert.strictEqual(isPalindrome("robot"), false);
    assert.strictEqual(isPalindrome("hello"), false);
  });
});
