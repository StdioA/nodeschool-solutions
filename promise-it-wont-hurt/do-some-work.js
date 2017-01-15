'use strict';

var HTTP = require("q-io/http");

HTTP.read('http://localhost:7000/')
	.then(function (id) {
		return id;
	})
	.then(function (id) {
		HTTP.read(`http://localhost:7001/${id}`)
			.then(function (buf) {
				console.log(JSON.parse(buf.toString()));
			});
	})
	.done();
