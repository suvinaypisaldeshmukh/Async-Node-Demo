// async_io_example.js

const fs = require('fs');
setTimeout(() => {
    console.log("Awake after 30 seconds!");
  }, 10000); // 10,000 milliseconds = 10 seconds
// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File content:', data);
});

console.log('Reading file asynchronously. This message may appear before the file content.');