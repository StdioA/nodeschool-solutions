fs = require('fs');

function callback(err, buffer){
	text = buffer.toString();
	k = text.split('\n');
	console.log(k.length-1);
}

path = process.argv[2];
fs.readFile(path, callback)
