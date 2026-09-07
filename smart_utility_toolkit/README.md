# Lab Assignment 1 – Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)  
**Unit:** Unit-1  
**Marks:** 2.5

## Objective
This project demonstrates Node.js core modules without external packages:
- `process.argv` for command-line interaction
- Custom module creation and reuse
- `http` for a basic web server
- `fs` for file create/read/update/delete operations
- `crypto` for secure random dice generation

## How to Run

### 1. CLI Calculator
```bash
node calculator.js 10 + 5
node calculator.js 20 - 7
node calculator.js 6 "*" 4
node calculator.js 20 / 5
```

### 2. Custom Module
```bash
node module-demo.js
```

### 3. File Manager
```bash
node file-manager.js
```

### 4. Random Dice Generator
```bash
node dice.js 5
```

### 5. HTTP Server
```bash
node server.js
```
Then open:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/status
- http://localhost:3000/dice

## Expected Result
All utilities run using only built-in Node.js modules. No external packages or frameworks are required.
