'use strict'

var myfs = require("./6.js")

myfs(process.argv[2], process.argv[3], function (err, list) {
	list.forEach(function (name) {
		console.log(name);
	});
});
