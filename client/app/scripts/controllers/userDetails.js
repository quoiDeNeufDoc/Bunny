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

		$scope.editable = true;

		$scope.firstName = $scope.person.firstName;
		$scope.lastName = $scope.person.lastName;
		$scope.phone = "";
		$scope.typeOperation = "";
		$scope.date = "";


		$scope.phoneChanged = function(value) {
			$scope.phone = $("#phone-input")[0].value;
			if ($scope.phone && $scope.phone.length > 2) {
			  	$scope.startPhone = $scope.phone.substring(0, 2);
				$scope.endPhone = $scope.phone.substr(2);
			  }
	          if ($scope.phone.length >= 9 && $scope.date && $scope.typeOperation) {
	          		$scope.editable = false;
	          }
		}

		
		$scope.typeOperationChanged =  function(value) {
			$scope.typeOperation = $("#type-intervention")[0].value;
	          if ($scope.phone && $scope.date && $scope.startPhone && $scope.endPhone && $scope.typeOperation) {
	          		$scope.editable = false;
	          }
		}

        $scope.dateChanged =  function(value) {
			$scope.date = $("#date-value")[0].value;
	          if ($scope.phone && $scope.startPhone && $scope.endPhone && $scope.date && $scope.typeOperation) {
	          		$scope.editable = false;
	          }
		}

        console.log('[userDetailsController]');
        console.log($scope.person);
}]);
