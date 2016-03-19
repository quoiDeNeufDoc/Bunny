var nodemailer = require('nodemailer');
var httpService = require('./httpService');
var app = httpService.app;
var passport = httpService.passport;
var tokenSecret = httpService.tokenSecret;
var jwt =  httpService.jwt;
var dbService = require('./dbService');


console.log("[MESSAGE_SERVICE] ==== STARTING ====");

var sendNotifications = function(user) {
	console.info('[SUBSCRIBE_SERVICE] -- Send notifications');
	var userRelatives = user.closeRelatives;
	userRelatives.forEach(function(userRelative) {
		console.log("relative "+userRelative.name);
	});
}

var sendMail = function(email, subject, body) {
	return new Promise(function(resolve, reject) {

		// Create the transporter
		var transporter = nodemailer.createTransport(config.emailServer);

		console.info('[SUBSCRIBE_SERVICE] Mail transporter is ready');

		// Create the email itself
		var emailObj = {
			to: email,
			from: config.emailFrom,
			subject: subject,
			html: body
		};
		console.info('[SUBSCRIBE_SERVICE] Mail is now ready to be sent');

		// Send the mail
		transporter.sendMail(emailObj, function(error, info) {
			if (error) {
				console.info('[SUBSCRIBE_SERVICE] Error : impossible to send mail to user "' + email + '" : '+error);
				reject();
			}
			else {
				console.info('[SUBSCRIBE_SERVICE] Send mail to user "' + email + '" : Success');
				resolve();
			}
		});
	});
}

app.post('/api/messages/v1.0/messages',  function (req, res, next) {
	
	var patientSecuNumber = req.body.secuNumber;
	var message = req.body.message; 

	dbService.getUser({ secuId:patientSecuNumber })
	.then(function(user) {
		var storedMessage = { date: new Date(), body: message };
		user.messages.push(message);
		return dbService.setUser(user);
	})
	.then(function(user) {
		sendNotifications(user);
	})
	.catch(function(error) {

	})
	res.status(200).end();
});



console.log("[MESSAGE_SERVICE] ==== STARTED ====");