'use strict';

var express = require('express');

var app = express();

app.get('/search', function (req, res) {
	res.send(req.query);
});

app.listen(Number(process.argv[2]));
