"use strict";

angular.module('clientApp').service('loginService', [

	'$http',
	'$q',
	/*'$localStorage',*/

	function ($http, $q) 
	{ 
		this.login = function(user) {
			console.log("[LoginService] login");
			console.log(user);

			var deferred = $q.defer();

			// Call the authenticate webService
			$http({ 
				method: 'POST',
				url: 'http://172.17.2.86:8080/api/authenticate/v1.0/sendAuthTokenNotification',
				headers: { 	'Accept': 'application/json' },
				body: {phone: user.telephone}
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
	}
]);
