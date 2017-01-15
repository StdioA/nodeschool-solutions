'use strict'

var fs = require("fs")
var path = require("path")

module.exports = function(p, ext, callback) {
	try {
		fs.readdir(p, function (err, arr) {
			if(err != null) {
				callback(err, []);
			} else {
				var e = '.'+ext;
				callback(err, arr.filter(function (name) {
					return path.extname(name) == e;
				}));
			}
		});	
	} catch (err) {
		throw err;
	}
}
