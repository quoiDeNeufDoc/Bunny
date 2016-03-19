'use strict';

angular.module('clientApp').controller('myUserCtrl',
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
	    		console.log('[myUserCtrl] updateUserDetails success');
	    		$scope.isInit = true;
	    	})
	    	.catch(function (error) {
	    		console.error('[myUserCtrl] updateUserDetails error');
	    	});
	    }
  });
