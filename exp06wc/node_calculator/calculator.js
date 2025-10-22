// calculator.js
// Simple Calculator Program using Node.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Simple Calculator using Node.js ===");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operation (+, -, *, /): ", (op) => {
      let result;

      const a = parseFloat(num1);
      const b = parseFloat(num2);

      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Error! Division by zero";
          break;
        default:
          result = "Invalid operator!";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});

