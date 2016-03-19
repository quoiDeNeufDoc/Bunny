var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {
	phone: { type: String, unique: true, required: true },
	firstName: String,
	lastName: String,
	doctor: String,
	interventions: {type: Array},
	token: String,
	closeRelatives: {type: Array},
	messages: {type: Array}
});