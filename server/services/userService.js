var UserModel = require('../models/user');

var getUser = function(query, fields) {
	return new Promise(function(resolve, reject) {
		UserModel.findOne(query, fields, function (err, user) {
			if (!err) {
				if (!user) console.log('[USER_SERVICE] -- User not found in DB');
				else console.log('[USER_SERVICE] -- get user from DB success');
				resolve(user);
			}
			else {
				var errorMessage = 'get user from DB failure' + err;
				console.log('[USER_SERVICE] -- ' + errorMessage);
				reject(new Error(errorMessage));
			}
		});
	});
}

var setUser = function(user) { 
	return new Promise(function(resolve, reject) {
		user.save(function(err, usr) {
			if (!err) {
				console.info('[USER_SERVICE] -- set user "' + user.phone + '" in DB success');
				resolve(usr);
			}
			else {
				var errorMessage = 'set user "' + user.phone + '" in DB failure ' + err;
				console.log('[USER_SERVICE] -- ' + errorMessage);
				reject(new Error(errorMessage));
			}
		});
	});
}

exports.getUser = getUser;
exports.setUser = setUser;