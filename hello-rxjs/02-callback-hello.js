const fs = require('fs');

try {
  const buffer = fs.readFileSync('src.txt');
  fs.writeFileSync('copy.txt', buffer);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Callback hell / Pyramid of Doom
fs.readFile('src.txt', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('copy.txt', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Done');
      }
    });
  }
});
