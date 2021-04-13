const rxjs = require('rxjs');

console.log('Setting up the Observable')

const observable = new rxjs.Observable(subscriber => {
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(5);
  setTimeout(() => { subscriber.next(7);
                     subscriber.complete();}, 
            1000);
});

console.log('Setting up the Subscribers');

observable.subscribe({
  next(x) { console.log('Subscriber 1 - Next value: ' + x); },
  error(err) { console.error('Subscriber 1 - Error: ' + err); },
  complete() { console.log('Subscriber 1 - Complete'); }
});
observable.subscribe(x => {
  console.log('Subscriber2: ' + x);
});
observable.subscribe(data => {
  console.log('Subscriber3: ' + data);
});

console.log('Done');