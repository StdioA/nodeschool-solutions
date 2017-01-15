'use strict';


function all(proa, prob) {
	return new Promise(function (resolve, reject) {
		var values = [];

		proa.then(function (val) {
			values.push(val);
			if (values.length == 2) {
				values.reverse();
				resolve(values);
			}
		});
		prob.then(function (val) {
			values.push(val);
			if (values.length == 2) {
				values.reverse();
				resolve(values);
			}
		});
	});
}

Promise.resolve(all(getPromise1(), getPromise2())).then(console.log);
