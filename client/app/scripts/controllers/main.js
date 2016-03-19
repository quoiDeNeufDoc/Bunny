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
	'localStorage',


	function($scope, loginService, localStorage) {
		$scope.user = {};

    	/*$scope.sendLoginForm = function(user) {
    		console.log("[MainCtrl] send login form");
    		console.log(user.telephone);
    		$scope.user.telephone = user.telephone;
    		//172.17.2.86
    		loginService.login(user)
    		.then(function(success) {
    			console.log("Login success !!!");
    			console.log(success);

    			document.querySelector("#logincard").classList.toggle("flip");
    		})
    		.catch(function (error) {
    			console.error("[MainCtrl] sendLoginForm error");
    		})
    	}

    	$scope.sendActivationCode = function(user) {
    		console.log("[MainCtrl] sendActivationCode");
    		console.log(user.code);
    		$scope.user.code = user.code;
    		//172.17.2.86
    		loginService.sendActivationCode(user)
    		.then(function(success) {
    			console.log("Activation code success !!!");
    			console.log(success);
    			$scope.user = success.user;
    			$scope.user.token = success.token;

    			window.location.href = "http://localhost:9000/#/myUser";
    		})
    		.catch(function (error) {
    			console.error("[MainCtrl] sendActivationCode error");
    		})
    	}*/

    	$scope.sendForm = function(user) {
    		$scope.user = user;
    		console.log($scope.user);
    	}
}]);
