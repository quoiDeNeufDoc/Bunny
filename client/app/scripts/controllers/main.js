'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('MainCtrl', [
	'$scope', 
	'loginService',

	function($scope, loginService) {
		$scope.user = {};

    	$scope.sendLoginForm = function(user) {
    		console.log("[MainCtrl] send login form");
    		console.log(user.telephone);
    		//172.17.2.86
    		loginService.login(user)
    		.then(function(success) {
    			console.log("Login success !!!");
    			console.log(success);
    		})
    		.catch(function (error) {
    			console.error("[MainCtrl] sendLoginForm error");
    		})
    	}
}]);
