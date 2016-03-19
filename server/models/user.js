var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {
	phone: { type: String, unique: true, required: true },
	firstname: String,
	lastname: String,
	secuId: String,
	closeRelatives: {type: Array},
	token: String
});