var UserModel = require('../models/user');
var httpService = require('./httpService');
var userService = require('./userService');
var randomString = require("randomstring");

var app = httpService.app;

console.log("[AUTH_SERVICE] ==== STARTING ====");

/******************************************************************/
/*  AUTHENTICATION                                                */
/******************************************************************/
app.post('/api/authenticate/v1.0/sendAuthTokenNotification', function (req, res, next) {
	
	// Get the phone parameter
	var phone = req.body.phone;
 	var token = randomString.generate(4);

	console.log('[AUTH_SERVICE] Receive /api/authenticate/v1.0/sendAuthTokenNotification request for user "' + phone + '"');

	userService.getUser({ phone:phone })
	.then(function(user) {
		if (user) {
			console.log('[AUTH_SERVICE] -- Already registered user');
		}
		else {
			console.log('[AUTH_SERVICE] -- Create user in DB');
			var userModel = new UserModel ({ phone: phone, token: token });
			return userService.setUser(userModel);
		}
	})
	.then(function() {
		res.status(200).end({phone:phone, token:token});
	})
	.catch(function(error) {
		res.status(400).end({details:'Impossible to create user'});
	});
});


app.get('/api/authenticate/v1.0/login', function (req, res, next) {

	console.log("[AUTH_SERVICE] /api/authenticate/v1.0/login");

	passport.authenticate('basic', function (err, user) {
		if (err) return res.status(401).json({ message: err });
		console.log("[AUTH_SERVICE] encode authentication token for user " + user.login);
		var token = jwt.encode({ username: user.login}, tokenSecret);
		res.status(200).json({ token : token, user: user, supportEmail: supportEmail });

	})(req, res, next);
});


console.log("[AUTH_SERVICE] ==== STARTED ====");