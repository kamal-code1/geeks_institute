// ex4-app.js

console.log("=== Test compareToTen ===");
require('./ex1-compareToTen');

setTimeout(() => {
  console.log("\n=== Test delayPromise (4 secondes) ===");
  require('./ex2-delayPromise');
}, 1000);

setTimeout(() => {
  console.log("\n=== Test resolve & reject ===");
  require('./ex3-resolveReject');
}, 6000);
