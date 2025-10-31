# 🛠 JavaScript Utility Functions

This project contains a set of **utility functions** in JavaScript, including string manipulation, a calculator, Caesar cipher encryption, and array analysis. All functions are tested with **Jest** to ensure correctness.

---

## 📚 Table of Contents

- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Tests](#tests)
- [Author](#author)
- [License](#license)

---

## 🚀 Features

1. **capitalize(str)**: Capitalizes the first character of a string.
2. **reverseString(str)**: Returns the reverse of a string.
3. **calculator**: An object with basic math operations:
   - `add(a, b)`
   - `subtract(a, b)`
   - `multiply(a, b)`
   - `divide(a, b)` (throws error on divide by zero)
4. **caesarCipher(str, shift)**: Encrypts a string using a Caesar cipher.
   - Supports wrap-around from 'z' → 'a'.
   - Preserves original letter case.
   - Ignores non-alphabetic characters (punctuation, spaces, etc.).
5. **analyzeArray(arr)**: Returns an object with `average`, `min`, `max`, and `length` of a numeric array.

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/kaziarman23/odin-testing-practice.git
cd odin-testing-practice
```

2. Install dependencies (for testing):

```bash
npm install
```

---

## 💡 Usage

Import the functions:

```js
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./utils.js";

// Capitalize
console.log(capitalize("hello")); // Hello

// Reverse String
console.log(reverseString("hello")); // olleh

// Calculator
console.log(calculator.add(5, 3)); // 8
console.log(calculator.divide(10, 2)); // 5

// Caesar Cipher
console.log(caesarCipher("Hello, World!", 3)); // Khoor, Zruog!

// Analyze Array
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
// { average: 4, min: 1, max: 8, length: 6 }
```

---

## 🧪 Tests

Tests are written using **Jest**.

Run tests:

```bash
npm test
```

Example test cases include:

- Capitalizing strings
- Reversing strings
- Basic calculator operations
- Caesar cipher encryption (with wrap-around and punctuation handling)
- Array analysis for average, min, max, and length

---

## ✍️ Author

**Kazi Arman**
📧 [kaziarman@proton.me](mailto:kaziarman@proton.me)
🌐 [https://github.com/kaziarman23](https://github.com/kaziarman23)

---

## 🪪 License

MIT License — free to use, modify, and distribute.
