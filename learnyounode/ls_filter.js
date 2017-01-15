'use strict'

var fs = require("fs")
var path = require("path")

fs.readdir(process.argv[2], function (err, list) {
	var filter = '.'+process.argv[3]
	list.forEach(function (name) {
		if(path.extname(name) == filter)
			console.log(name);
	});
});
