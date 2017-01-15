'use strict';

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.set('views', process.argv[3]);
app.set('view engine', 'jade');

app.get('/home', function (req, res) {
	res.render('index', {
		date: new Date().toDateString(),
	});
});

app.post('/form', function (req, res) {
	var str = req.body.str;
	var rev = str.split('').reverse().join('');
	res.end(rev);
});

app.listen(Number(process.argv[2]));
