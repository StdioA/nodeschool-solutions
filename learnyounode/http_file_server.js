'use strict'

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	fs.path response
});
server.listen(process.argv[2])
