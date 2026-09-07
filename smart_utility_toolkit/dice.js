// Random dice generator using Node.js crypto module
const crypto = require("crypto");

const rolls = Number(process.argv[2]) || 1;

if (rolls < 1 || !Number.isInteger(rolls)) {
  console.log("Usage: node dice.js <number_of_rolls>");
  process.exit(1);
}

console.log(`Rolling a six-sided dice ${rolls} time(s):`);

for (let i = 1; i <= rolls; i++) {
  const roll = crypto.randomInt(1, 7);
  console.log(`Roll ${i}: ${roll}`);
}
