"use strict";

angular.module('clientApp').service('loginService', [

	'$http',
	'$q',
	/*'$localStorage',*/

	function ($http, $q) 
	{ 	
		var that = this;
		this.url = "http://localhost:8080";

		/**
         * Encodes a string in base64
         * @param {String} input The string to encode in base64.
         */
        this.encode = function (input) {
        	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        	
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc2 = ((chr1 & 3) << 4);
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) + keyStr.charAt(enc4);
            } while (i < input.length);

            return output;
        };

		this.login = function(user) {
			console.log("[LoginService] login");
			console.log(user);

			var deferred = $q.defer();

			// Call the authenticate webService
			$http({ 
				method: 'POST',
				url: that.url+'/api/authenticate/v1.0/sendAuthTokenNotification',
				headers: { 	'Accept': 'application/json'},
				data: {phone: user.telephone}
			})

			// Handle success response
			.success(function (response) {
				// Resolve the promise
				deferred.resolve(response);
			})

			// Handle error response
			.error(function (data) 
			{
				console.error("[LoginService] login");
				console.error(data);
				deferred.reject(data);
			});

			return deferred.promise;
		};

		this.sendActivationCode = function(user) {
			console.log("[LoginService] sendActivationCode");
			console.log(user);

			var deferred = $q.defer();

			// Call the authenticate webService
			$http({ 
				method: 'GET',
				withCredentials: true,
				url: that.url+'/api/authenticate/v1.0/login',
				headers: { 	'Authorization': 'Basic '+this.encode(user.telephone+':'+user.code), 
							'Accept': 'application/json'
				}
			})
			// Handle success response
			.success(function (response) {
				// Resolve the promise
				deferred.resolve(response);
			})
			// Handle error response
			.error(function (data) 
			{
				console.error("[LoginService] login");
				console.error(data);
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
]);
