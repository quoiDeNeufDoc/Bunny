// Import frameworks
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
var logger = require("morgan");
var serveStatic = require('serve-static');
var session = require('express-session');
var jwt = require('jwt-simple');
var UserModel = require('../models/user');

var app = express();
var tokenSecret = "WhatsUpDoc";

var start = function (httpConfig) {

	console.log("[HTTP_SERVICE] ==== STARTING ====");
	return new Promise(function(resolve, reject) {

		// Configure express framework
		console.log("[HTTP_SERVICE] -- Configure Express framework");
		app.set('port', httpConfig.port); 
		app.use(logger("common"));
		app.use(bodyParser.json());      
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(passport.initialize()); 

		console.log("[HTTP_SERVICE] -- Enable CORS");
		app.use(function (req, res, next) {	
			// Check request origin and configure Access-Control-Allow-* headers
			var reqOrigin = req.get('Origin')
			if (httpConfig.allowedOrigins.indexOf(reqOrigin) != -1) 
				res.setHeader('Access-Control-Allow-Origin', reqOrigin);
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			res.setHeader('Access-Control-Allow-Credentials', true);
			next();
		});

		console.log("[HTTP_SERVICE] -- Define BasicStrategy");
		/*passport.use(new BasicStrategy (
			function(phone, token, done) {
				try {
					UserModel.findOne( { phone: phone }, 'phone token',
						function (err, user) {
							if (user) {
								if (user.token != token) {
									console.log("[HTTP_SERVICE] checkUserAuth('" + phone + "') wrongToken");
									return done('wrongToken', null);
								}
								console.log("[HTTP_SERVICE] checkUserAuth('" + phone + "') success");
								return done(false, user);
							}
							console.log("[HTTP_SERVICE] checkUserCredentials('" + phone + "') wrong user");
							return done("wrongUser", null);	
						}
					);
				}
				catch (err) {
					console.error("[BasicStrategy] error " + err);
        			return done(null, false); //returns a 401 to the caller
        		}
        	}
        ));*/

		// Start the http server
		var server = http.createServer(app).listen(app.get('port'), function() {
			console.log('[HTTP_SERVICE] -- REST server listening on port ' + app.get('port'));
			console.log('[HTTP_SERVICE] ==== STARTED ====');
			resolve();
		});
	});
}

exports.start = start;
exports.app = app;
exports.passport = passport;
exports.tokenSecret = tokenSecret;
exports.jwt = jwt;
