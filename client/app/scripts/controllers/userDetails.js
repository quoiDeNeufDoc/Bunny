'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('userDetailsController', [
	'$scope', 
	'loginService',


	function($scope, loginService) {
		$scope.person = loginService.getUser();
        console.log('[userDetailsController]');
        console.log($scope.person);
}]);
