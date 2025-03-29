const isPalindrome = require("./index");

test("returns true for palindromes", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("noon")).toBe(true);
});

test("returns false for non-palindromes", () => {
    expect(isPalindrome("robot")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("javascript")).toBe(false);
});
