'use strict';

var fs = require('fs');
var express = require('express');

var app = express();

app.get('/books', function (req, res) {
	var filename = process.argv[3];
	fs.readFile(filename, function (err, data) {
		res.send(JSON.parse(data));
	});
});

app.listen(Number(process.argv[2]));
