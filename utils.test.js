// utils.test.js
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./utils.js";

describe("capitalize", () => {
  test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("")).toBe("");
  });
});

describe("calculator", () => {
  test("adds two numbers", () => expect(calculator.add(2, 3)).toBe(5));
  test("subtracts two numbers", () =>
    expect(calculator.subtract(5, 2)).toBe(3));
  test("multiplies two numbers", () =>
    expect(calculator.multiply(4, 3)).toBe(12));
  test("divides two numbers", () => expect(calculator.divide(10, 2)).toBe(5));
  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe("caesarCipher", () => {
  test("shifts letters correctly", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves non-alphabetic characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("works with negative shifts", () => {
    expect(caesarCipher("def", -3)).toBe("abc");
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });
});

describe("analyzeArray", () => {
  test("returns average, min, max, length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("handles empty array", () => {
    expect(analyzeArray([])).toEqual({
      average: 0,
      min: null,
      max: null,
      length: 0,
    });
  });
});
