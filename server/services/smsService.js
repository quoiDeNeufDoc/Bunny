var adbService = require('./adbService');

var sendSms = function(number,text,callback) {
	console.log("send sms to "+number+" with text "+text);
	var cmds=[
		"shell am start -a android.intent.action.SENDTO -d sms:"+number,
		"shell input text '"+text+"'",
		"shell input keyevent 66"
	];
	adbService.sendCommands(cmds,function(res,stdout,stderr){
		console.log(res);
		console.log(stdout);
		console.log(stderr);
		callback(res,stdout,stderr);
	});
}

exports.sendSms = sendSms;