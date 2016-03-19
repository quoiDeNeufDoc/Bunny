var httpService = require('./httpService');
var dbService = require('./dbService');
var app = httpService.app;
var passport = httpService.passport;
var tokenSecret = httpService.tokenSecret;
var jwt =  httpService.jwt;


app.post('/api/users/v1.0/users',  function (req, res, next) {
	
	// Get the phone parameter
	var firstName = req.body.firstName;
 	var lastName = req.body.lastName;
	var secuId = req.body.secuNumber;
	var closeRelatives = req.body.closeRelatives;
	var phone = "0689747249";
	console.log(req.body);

	console.log('[USER_SERVICE] Receive /api/users/v1.0/users request for user "' + phone + '"');
	dbService.getUser({ phone:phone })
	.then(function(user) {
		user.firstName = firstName;
		user.lastName = lastName;
		user.secuId = secuId;
		user.closeRelatives = closeRelatives;
		return dbService.setUser(user);
	})
	.then(function() {
		res.status(200).end();
	})
	.catch(function(error) {
		console.log(error);
	});
});
