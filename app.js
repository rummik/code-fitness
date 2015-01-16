var express = require('express');
var engines = require('consolidate');
var app = express();

var port = process.env.PORT || 4000;

app.engine('html', engines.swig);

app.listen(port);
