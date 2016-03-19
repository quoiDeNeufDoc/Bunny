var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {
	phone: { type: String, unique: true, required: true },
	token: String,
	firstName: String,
	lastName: String,
	secuId: String,
	closeRelatives: {type: Array},
	messages: {type: Array}
});