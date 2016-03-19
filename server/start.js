console.log('---------------------------------------------------------');
console.log('-- QuoiDeNeufDoc Server                                --');
console.log('---------------------------------------------------------');

/* Load the config file */
var config = require('./config/config.js');

/* Create the db service */
var dbService = require('mongoose');
dbService.connect(config.db.url);

// Create the http service
var httpService = require('./services/httpService');

httpService.start(config.http).
then(function() {
	// Declare micro-services
	require('./services/authService');
	require('./services/messageService');	
	require('./services/userService');
	require('./services/timelineService');

});






