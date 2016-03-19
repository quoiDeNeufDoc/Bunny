var fs = require('fs');
var http = require('http');
var express = require('express');
var logger = require("morgan");
var serveStatic = require('serve-static');

var argv = process.argv;
var dir = "build";
var protocol = "https";

console.log('---------------------------------------------------------')

console.log('---------------------------------------------------------');

// Configure express
console.log("[HTTP_SERVICE] load config");
var app = express();
app.set('port', 8000); 
app.use(logger("dev"));
app.use(serveStatic(dir, {'app': ['index.html']} ));

// Load certificates
console.log("[HTTP_SERVICE] load certificates");

// Start the https server
http.createServer(app).listen(app.get('port'), function(){
	console.log('[HTTP_SERVICE] started : listening on port ' + app.get('port') + " protocol http");
});

