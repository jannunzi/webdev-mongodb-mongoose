// install express
// npm install express --save
var express    = require('express');
// create an express instance
var app        = express();
// install mongoose
// npm install mongoose --save
var mongoose = require("mongoose");

// install body-parser and multer
// npm install body-parse --save
// npm install multer --save
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// use 127.0.0.1:3000 locally
// use remote IP and PORT if hosted on openshift.com
var ipaddress  = process.env.OPENSHIFT_NODEJS_IP   || "127.0.0.1";
var port       = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// listen for incoming HTTP requests
app.listen(port, ipaddress);