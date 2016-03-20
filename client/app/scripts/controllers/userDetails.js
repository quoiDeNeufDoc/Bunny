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
		$scope.phone = "0663524173";
		$scope.startPhone = $scope.phone.substring(0, 2);
		$scope.endPhone = $scope.phone.substr(2);

		$scope.typeOperation = "Cataract";
		$scope.date = "";


		$scope.phoneChanged = function(value) {
			$scope.phone = $("#phone-input")[0].value;
			if ($scope.phone && $scope.phone.length > 2) {
			  	
			  }
	          if ($scope.phone.length >= 9 && $scope.date && $scope.typeOperation) {
	          		$scope.editable = false;
	          		
	          		window.setTimeout(function() {
	          			$("#rightArea").css("visibility", "visible");
	          		}, 1500);
					
	          }
		}

		
		$scope.typeOperationChanged =  function(value) {
			$scope.typeOperation = $("#type-intervention")[0].value;
	          if ($scope.phone && $scope.date && $scope.startPhone && $scope.endPhone && $scope.typeOperation) {
	          		$scope.editable = false;
	          		window.setTimeout(function() {
	          			$("#rightArea").css("visibility", "visible");
	          		}, 1500);
	          }
		}

        $scope.dateChanged =  function(value) {
			$scope.date = $("#date-value")[0].value;
	          if ($scope.phone && $scope.startPhone && $scope.endPhone && $scope.date && $scope.typeOperation) {
	          		$scope.editable = false;
	          		window.setTimeout(function() {
	          			$("#rightArea").css("visibility", "visible");
	          		}, 1000);
	          }
		}

		/*$scope.goHome = function() {
			window.location.href = "http://" + window.location.hostname + ":9000/#/home";
		}*/

        console.log('[userDetailsController]');
        console.log($scope.person);

}]);
