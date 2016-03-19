'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MyUserCtrl
 * @description
 * # MyUserCtrl
 * Controller of the clientApp
 */
 
angular.module('clientApp').controller('MyUserCtrl', [
	'$scope',
	'loginService',

	function ($scope, loginService) {
	    
	    $scope.user = loginService.getUser();
	    $scope.isInit = false;
	    if ($scope.user.firstName) {
			$scope.isInit = true;
	    }

	    $scope.updateUserDetails = function(user) {
	    	$scope.user.firstName = user.firstName;
	    	$scope.user.lastName = user.lastName;

	    	loginService.updateUser($scope.user)
	    	.then(function (ok) {
	    		console.log('[MyUserCtrl] updateUserDetails success');
	    		$scope.isInit = true;
	    		console.log(user);
	    	})
	    	.catch(function (error) {
	    		console.error('[MyUserCtrl] updateUserDetails error');
	    	});
	    }
	}

  ]);
