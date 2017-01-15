'use strict';

var promise = Promise.resolve('Resolve!');

promise.then(console.log);

var promise = Promise.reject('Reject!');

promise.catch(console.log);
