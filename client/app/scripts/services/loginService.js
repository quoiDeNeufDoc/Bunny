"use strict";

angular.module('clientApp').service('loginService', [

	'$http',
	'$q',
	'localStorage',

	function ($http, $q, localStorage) 
	{ 	
		var that = this;
		this.url = "http://localhost:8080";

		this.user = {};

		/**
         * Encodes a string in base64
         * @param {String} input The string to encode in base64.
         */
        this.getUser = function() {
			return that.user;
		}

		this.setUser = function(user) {
			that.user = user;
		}

        this.getUsers = function() {

        	var deferred = $q.defer();

        	/*$http({ 
				method: 'GET',
				url: that.url+'/api/users/v1.0/users',
				headers: { 	'Accept': 'application/json'}
			})

			// Handle success response
			.success(function (response) {
				console.log(response);
				// Resolve the promise
				deferred.resolve(response);

			})

			// Handle error response
			.error(function (data) 
			{
				console.error("[LoginService] login");
				console.error(data);
				deferred.reject(data);
			});*/
        		window.setTimeout(function() {
        			var persons = new Array();
        			var person = {firstName : "Kiki", lastName: "fiki"};
        			var person2 = {firstName : "Kiki2", lastName: "fiki2"};
        			var person3 = {firstName : "Kiki3", lastName: "fiki3"};
        			persons.push(person);
        			persons.push(person2);
        			persons.push(person3);
        			deferred.resolve(persons);
        		}, 3000);

        		console.log("YEAH");

        	return deferred.promise;
        }

        this.updateUser = function(person) {
        	console.log("[LoginService] updateUser");
			console.log(person);

			
			//var deferred = $q.defer();

			// Call the authenticate webService
			$http({ 
				method: 'POST',
				url: that.url+'/api/users/v1.0/timeline',
				headers: { 	
					'Accept': 'application/json',
					'Authorization': 'Bearer '+ that.user.token
				},
				data: {}
			})
			// Handle success response
			.success(function (response) {
				// Resolve the promise
				deferred.resolve(response);
			})
			// Handle error response
			.error(function (data) 
			{
				console.error("[LoginService] updateUser");
				console.error(data);
				deferred.reject(data);
			});

			//return deferred.promise;
        }

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
				localStorage.set({ 'token':response.token, 'user':response.user, 'userId': response.user._id});
				that.user = response.user;
				that.user.token = response.token;

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

		

		/*this.updateUser = function(user) {
			console.log("[LoginService] updateUser");
			console.log(user);

			that.user = user;

			var deferred = $q.defer();

			// Call the authenticate webService
			$http({ 
				method: 'POST',
				url: that.url+'/api/users/v1.0/users',
				headers: { 	
					'Accept': 'application/json',
					'Authorization': 'Bearer '+ that.user.token
				},
				data: user
			})
			// Handle success response
			.success(function (response) {
				// Resolve the promise

				deferred.resolve(response);
			})
			// Handle error response
			.error(function (data) 
			{
				console.error("[LoginService] updateUser");
				console.error(data);
				deferred.reject(data);
			});

			return deferred.promise;
		}*/
	}
]);
