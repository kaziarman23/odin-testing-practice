// 1. Capitalize
const capitalize = (str) => {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
};

// 2. Reverse string
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// 3. Calculator
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  },
  multiply: (a, b) => a * b,
};

// 4. Caesar Cipher
const caesarCipher = (str, shift) => {
  const shiftChar = (char, shift) => {
    const isUpper = char >= "A" && char <= "Z";
    const isLower = char >= "a" && char <= "z";

    if (!isUpper && !isLower) return char;

    const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
    const code =
      ((((char.charCodeAt(0) - base + shift) % 26) + 26) % 26) + base;
    return String.fromCharCode(code);
  };

  return str
    .split("")
    .map((c) => shiftChar(c, shift))
    .join("");
};

// 5. Analyze Array
const analyzeArray = (arr) => {
  if (!arr.length) return { average: 0, min: null, max: null, length: 0 };
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = sum / length;
  return { average, min, max, length };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
