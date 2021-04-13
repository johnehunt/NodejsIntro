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

console.log('Setting up the Observer');
observable.subscribe({
  next(value) { console.log('Next value: ' + value); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Complete'); }
});

console.log('Done');
