'use strict';

var express = require('express');

var app = express();

app.use(express.static(process.argv[3]));

app.listen(Number(process.argv[2]));