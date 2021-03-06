var UserModel = require('../models/user');
var httpService = require('./httpService');
var dbService = require('./dbService');
var randomString = require("randomstring");

var app = httpService.app;
var passport = httpService.passport;
var tokenSecret = httpService.tokenSecret;
var jwt =  httpService.jwt;

console.log("[AUTH_SERVICE] ==== STARTING ====");

/******************************************************************/
/*  AUTHENTICATION                                                */
/******************************************************************/
app.post('/api/hello', function (req, res, next) {
	console.log(req.body);
	res.status(200).end();
});



app.post('/api/authenticate/v1.0/sendAuthTokenNotification', function (req, res, next) {
	
	// Get the phone parameter
	var phone = req.body.phone;
 	var token = randomString.generate(4);

	console.log('[AUTH_SERVICE] Receive /api/authenticate/v1.0/sendAuthTokenNotification request for user "' + phone + '"');
	console.log('[AUTH_SERVICE] token ' + token);
	dbService.getUser({ phone:phone })
	.then(function(user) {
		if (user) {
			console.log('[AUTH_SERVICE] -- Already registered user');
			user.token = token;
			return dbService.setUser(user);
		}
		else {
			console.log('[AUTH_SERVICE] -- Create user in DB');
			var userModel = new UserModel ({ phone: phone, token: token });
			return dbService.setUser(userModel);
		}
	})
	.then(function() {
		console.log('[AUTH_SERVICE] -- Send 200 success response');
		res.status(200).send({phone:phone, token:token}).end();
		return Promise.resolve();
	})
	.catch(function(error) {
		console.error('[AUTH_SERVICE] -- Send 400 error response');
		res.status(400).send({details:'Impossible to create user'}).end();
	});
});


app.get('/api/authenticate/v1.0/login', function (req, res, next) {

	console.log("[AUTH_SERVICE] Receive /api/authenticate/v1.0/login");

	passport.authenticate('basic', function (err, user) {
		if (err) return res.status(401).json({ message: err });
		console.log('[AUTH_SERVICE] -- Encode authentication token for user "' + user.phone + '"');
		var token = jwt.encode({ phone: user.phone}, tokenSecret);
		res.status(200).json({ token : token, user: user });
	})(req, res, next);
});








console.log("[AUTH_SERVICE] ==== STARTED ====");