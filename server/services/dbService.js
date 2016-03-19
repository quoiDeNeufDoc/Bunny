var UserModel = require('../models/user');

var getUser = function(query, fields) {
	return new Promise(function(resolve, reject) {
		UserModel.findOne(query, fields, function (err, user) {
			if (!err) {
				if (!user) console.log('[DB_SERVICE] -- User not found in DB');
				else console.log('[DB_SERVICE] -- Get user from DB success');
				resolve(user);
			}
			else {
				var errorMessage = 'Get user from DB failure' + err;
				console.log('[DB_SERVICE] -- ' + errorMessage);
				reject(new Error(errorMessage));
			}
		});
	});
}

var getUsers = function() {
	return new Promise(function(resolve, reject) {
		UserModel.find({}, function (err, users) {
			if (!err) {
				if (!users) console.log('[DB_SERVICE] -- Users not found in DB');
				else console.log('[DB_SERVICE] -- Get users from DB success');
				resolve(users);
			}
			else {
				var errorMessage = 'Get users from DB failure' + err;
				console.log('[DB_SERVICE] -- ' + errorMessage);
				reject(new Error(errorMessage));
			}
		});
	});
}

var setUser = function(user) { 
	return new Promise(function(resolve, reject) {
		user.save(function(err, usr) {
			if (!err) {
				console.info('[DB_SERVICE] -- Set user "' + user.phone + '" in DB success');
				resolve(usr);
			}
			else {
				var errorMessage = 'Set user "' + user.phone + '" in DB failure ' + err;
				console.log('[DB_SERVICE] -- ' + errorMessage);
				reject(new Error(errorMessage));
			}
		});
	});
}

exports.getUser = getUser;
exports.setUser = setUser;