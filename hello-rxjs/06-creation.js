const { interval, timer, of, from, forkJoin } = require('rxjs');
const { mapTo } = require('rxjs/operators');

// interval(1000)
//   .subscribe(() => {
//     console.log('1s');
//   });

// timer(1000).subscribe({
//   next: () => console.log('1s'),
//   complete: () => console.log('DONE')
// });

// of('hello').subscribe((val) => {
//   console.log(val);
// });

// from('hello').subscribe((val) => {
//   console.log(val);
// });

// timer(Math.random() * 1000).pipe(
//   mapTo('response 1')
// ).subscribe((res) => console.log(res));

// timer(Math.random() * 1000).pipe(
//   mapTo('response 2')
// ).subscribe((res) => console.log(res));

function request(nb) {
  return timer(Math.random() * 1000).pipe(mapTo('response ' + nb));
}

forkJoin([request(1), request(2)]).subscribe((responses) => {
  console.log(responses);
});
