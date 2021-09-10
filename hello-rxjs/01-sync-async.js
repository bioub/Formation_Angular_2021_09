const fs = require('fs');

const buffer = fs.readFileSync('src.txt'); // readFileSync appel bloquant
console.log(buffer.toString('utf-8'));

// ^
// |                                 
// |readFileSync XXXXXXXXXXXXXXXXXX lg
// +------------------------------------>

fs.readFile('src.txt', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('END')
// ^
// |                                      lg
// |readFile - lg ...                     =>
// +----------------------------------------->