// File Manager using Node.js fs module
const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "sample.txt");
const updatedFileName = path.join(__dirname, "sample-updated.txt");

// CREATE
fs.writeFileSync(fileName, "Hello from Smart Utility Toolkit!\nThis file was created using fs.");
console.log("1. File created:", fileName);

// READ
const content = fs.readFileSync(fileName, "utf8");
console.log("\n2. File content:\n" + content);

// UPDATE
fs.appendFileSync(fileName, "\nThis line was added during the update operation.");
console.log("\n3. File updated successfully.");

// READ UPDATED FILE
console.log("\nUpdated content:\n" + fs.readFileSync(fileName, "utf8"));

// COPY
fs.copyFileSync(fileName, updatedFileName);
console.log("\n4. File copied to:", updatedFileName);

// DELETE COPIED FILE
fs.unlinkSync(updatedFileName);
console.log("5. Copied file deleted successfully.");
