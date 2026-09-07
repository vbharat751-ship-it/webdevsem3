// Reusing the custom logger module
const { log, error } = require("./logger");

log("Custom module loaded successfully.");
log("This message is generated using logger.js.");

try {
  const value = 10 / 2;
  log(`Calculation result: ${value}`);
} catch (err) {
  error(err.message);
}
