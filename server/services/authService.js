var UserModel = require('../models/user');
var httpService = require('./httpService');
var userService = require('./userService');
var randomString = require("randomstring");

var app = httpService.app;
var passport = httpService.passport;
var tokenSecret = httpService.tokenSecret;
var jwt =  httpService.jwt;

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
			return Promise.resolve();
		}
		else {
			console.log('[AUTH_SERVICE] -- Create user in DB');
			var userModel = new UserModel ({ phone: phone, token: token });
			return userService.setUser(userModel);
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


//passport.authenticate('bearer', { session: false }),
app.post('/api/authenticate/v1.0/users',  function (req, res, next) {
	
	// Get the phone parameter
	var firstName = req.body.firstName;
 	var lastName = req.body.lastName;
	var secuNumber = req.body.secuNumber;
	var closeRelatives = req.body.closeRelatives;
    var phone = "0689747249";
    console.log(req.body);

	console.log('[AUTH_SERVICE] Receive /api/authenticate/v1.0/users request for user "' + phone + '"');
	userService.getUser({ phone:phone })
	.then(function(user) {
		user.firstName = firstName;
		user.lastName = lastName;
		user.secuNumber = secuNumber;
		user.closeRelatives = closeRelatives;
		return userService.setUser(user);
	})
	.then(function() {
		res.status(200).end();
	})
	.catch(function(error) {

	});
});


app.post('/api/messages/v1.0/messages',  function (req, res, next) {
	
	var patientSecuNumber = req.body.secuNumber;
	var message = req.body.message; 

	userService.getUser({ secuId:patientSecuNumber })
	.then(function(user) {
		var storedMessage = { date: new Date(), body: message };
		user.messages.push(message);
	})
	.catch(function(error) {

	})
	res.status(200).end();
});



console.log("[AUTH_SERVICE] ==== STARTED ====");