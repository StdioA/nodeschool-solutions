'use strict'

var http = require('http');

var urls = process.argv.slice(2, 5);
var i = 0;

function collect () {
	http.get(urls[i], function (response) {
		var str = "";
		response.setEncoding("utf8");
		response.on("data", function (data) {
			str += data;
		});
		response.on("end", function () {
			console.log(str);
			i++;
			collect();
		});
	});
}

collect();

