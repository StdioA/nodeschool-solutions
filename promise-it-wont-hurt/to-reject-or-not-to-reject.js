'use strict';

var promise = new Promise(function (resolve, reject) {
	resolve('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

promise.then(console.log, function (err) {
	console.log(err.message);
});
