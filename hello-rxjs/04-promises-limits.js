// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// function timeout(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(); // appel le callback du .then (ici () => console.log('1s'))
//     }, delay)
//   });
// }

// timeout(1000)
//   .then(() => console.log('1s'));

function interval(delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(); // appel le callback du .then (ici () => console.log('1s'))
    }, delay)
  });
}

interval(1000)
  .then(() => console.log('1s'));

// setInterval(() => {
//   console.log('1s')
// }, 1000)