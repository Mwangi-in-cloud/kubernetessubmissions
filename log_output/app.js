const crypto = require('crypto');

// Generate random string on startup
const randomString = crypto.randomUUID();

// Output immediately
console.log(`${new Date().toISOString()}: ${randomString}`);

// Output every 5 seconds
setInterval(() => {
  console.log(`${new Date().toISOString()}: ${randomString}`);
}, 5000);