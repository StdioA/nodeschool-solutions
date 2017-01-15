var fs = require('fs');

path = process.argv[2];
text = fs.readFileSync(path).toString();

k = text.split('\n');
console.log(k.length-1);
