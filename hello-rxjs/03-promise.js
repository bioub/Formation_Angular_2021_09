// Promise (class)
// - d'abord apparu via des libs (q, bluebird)
// - native depuis ES2015

const fs = require('fs');

// Toujours le Callback Hell
fs.promises
  .readFile('src.txt')
  .then((buffer) => {
    fs.promises
      .writeFile('copy.txt', buffer)
      .then(() => {
        console.log('Copy Done');
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Pour éviter le callback hell on peut combiner les promesses
fs.promises.readFile('src.txt')
  .then((buffer) => fs.promises.writeFile('copy.txt', buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

// ES2017 async / await
async function copy() {
  try {
    const buffer = await fs.promises.readFile('src.txt');
    await fs.promises.writeFile('copy.txt', buffer);
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
}

copy();