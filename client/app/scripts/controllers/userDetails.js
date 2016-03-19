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

		var phone = $scope.person.phone;
		$scope.firstName = $scope.person.firstName;
		$scope.lastName = $scope.person.lastName;
		$scope.startPhone = phone.substring(0, 2);
		$scope.endPhone = phone.substr(2);

        console.log('[userDetailsController]');
        console.log($scope.person);
}]);
