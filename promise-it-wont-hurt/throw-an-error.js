'use strict';

var process = require('process');

function parsePromised (){
	return new Promise(function (resolve, reject) {
		resolve(JSON.parse(process.argv[2]));
	});
}

parsePromised().catch(console.log);
