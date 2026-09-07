// CLI Calculator using process.argv
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Usage: node calculator.js <number1> <operator> <number2>");
  console.log("Operators: +  -  *  /");
  process.exit(1);
}

const [a, operator, b] = args;
const num1 = Number(a);
const num2 = Number(b);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log("Error: Please enter valid numbers.");
  process.exit(1);
}

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Error: Invalid operator. Use +, -, *, or /.");
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
