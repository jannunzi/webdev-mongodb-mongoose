// install express
// npm install express --save
var express    = require('express');
// create an express instance
var app        = express();
// install mongoose
// npm install mongoose --save
var mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));

// use 127.0.0.1:3000 locally
// use remote IP and PORT if hosted on openshift.com
var ipaddress  = process.env.OPENSHIFT_NODEJS_IP   || "127.0.0.1";
var port       = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// listen for incoming HTTP requests
app.listen(port, ipaddress);