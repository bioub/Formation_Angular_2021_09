const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(); // appel le callback du .then (ici () => console.log('1s'))
    }, delay)
  });
}

interval(1000)
  .subscribe({
    next() {
      console.log('1s');
    },
    error(err) {
      console.log(err);
    },
    complete() {
      console.log('DONE')
    }
  });