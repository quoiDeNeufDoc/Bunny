var adb = require("adb-cmd");

var sendCommands = function(cmds,callback) {
	adb.devices(function(err, list) {
		console.log("device found "+list[0]);
		adb.cmd(cmds[0],function(res,stdout,stderr){
			console.log("sending command "+cmds[0]);
			if(stderr){
				console.log("error sending command "+cmds[0]+" stderr");
				callback(res,stdout,stderr);
			}
			console.log(stdout);
			adb.cmd(cmds[1],function(res,stdout,stderr){
				console.log("sending command "+cmds[1]);
				if(stderr){
					console.log("error sending command "+cmds[1]+" stderr");
					callback(res,stdout,stderr);
				}
				adb.cmd(cmds[2],function(res,stdout,stderr){
					console.log("sending command "+cmds[2]);
					if(stderr){
						console.log("error sending command "+cmds[2]+" stderr");
						callback(res,stdout,stderr);
					}
					callback(res,stdout,stderr);
				});
			});
			
		});
	});
}

exports.sendCommands = sendCommands;