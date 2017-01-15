'use strict';

var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:id', function (req, res) {
	var ans = crypto.createHash('sha1')
					.update(new Date().toDateString() + req.params.id)
					.digest('hex')
	res.end(ans);
});

app.listen(Number(process.argv[2]));
