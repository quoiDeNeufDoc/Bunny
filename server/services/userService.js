var httpService = require('./httpService');
var UserModel = require('../models/user');

var dbService = require('./dbService');
var app = httpService.app;
var passport = httpService.passport;
var tokenSecret = httpService.tokenSecret;
var jwt = httpService.jwt;

console.log("[USER_SERVICE] ==== STARTING ====");

// Create default users
/*
var userModel0 = new UserModel ({	
	"phone" : "0689747249",
	"firstName" : "Mathieu",
	"lastName" : "Cordebard",
});
var userModel1 = new UserModel ({	
	"phone" : "0689734249",
	"firstName" : "Dobromir",
	"lastName" : "Nikolov",
});
var userModel2 = new UserModel ({	
	"phone" : "0689567249",
	"firstName" : "Cedric",
	"lastName" : "Simon",
});

dbService.setUser(userModel0)
.then(function() {
	return dbService.setUser(userModel1);
})
.then(function() {
	return dbService.setUser(userModel2);
})
*/


app.get('/api/users/v1.0/users', function (req, res, next) {
	UserModel.find({}, function (err, users) {
		if (!err) {
			if (!users) console.log('[DB_SERVICE] -- Users not found in DB');
			else console.log('[DB_SERVICE] -- Get users from DB success');
			res.status(200).send(users).end();
		}
		else {
			var errorMessage = 'Get users from DB failure' + err;
			console.log('[DB_SERVICE] -- ' + errorMessage);
			res.status(400).end();
		}
	});

});


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
