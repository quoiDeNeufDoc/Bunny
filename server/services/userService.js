var httpService = require('./httpService');
var dbService = require('./dbService');
var app = httpService.app;
var passport = httpService.passport;
var tokenSecret = httpService.tokenSecret;
var jwt = httpService.jwt;

console.log("[USER_SERVICE] ==== STARTING ====");

app.post('/api/users/v1.0/users/:phone', function (req, res, next) {
	
	// Get the phone parameter
	var phone = req.params.phone;
	var firstName = req.body.firstName;
 	var lastName = req.body.lastName;

 	var doctor = req.body.doctor;


	console.log('[USER_SERVICE] Receive /api/users/v1.0/users request for user "' + phone + '"');
	dbService.getUser({ phone:phone })
	.then(function(user) {
		user.firstName = firstName;
		user.lastName = lastName;
		return dbService.setUser(user);
	})
	.then(function() {
		res.status(200).end();
	})
	.catch(function(error) {
		console.log(error);
	});
});

console.log("[USER_SERVICE] ==== STARTED ====");
