const { interval } = require('rxjs');
const { map, filter } = require('rxjs/operators');

console.log([0, 1, 2, 3, 4].map((v) => v ** 2));

interval(1000)
  .pipe(
    map((v) => v ** 2),
    filter((v) => v % 2 === 1),
  )
  .subscribe((val) => console.log(val));

  // mapTo('ABC') === map(() => 'ABC')