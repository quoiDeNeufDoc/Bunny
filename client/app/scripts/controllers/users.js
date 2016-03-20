'use strict';


angular.module('clientApp').controller('usersController', [
	
	'$scope', 
	'loginService',

	function($scope, loginService) {
		$scope.isLoading = true;

		

		$scope.users = [
			{ firstname:'Jean Claude', lastname:'Dusse'},
			{ firstname:'Lucien', lastname:' Bigard'},
			{ firstname:'Emmanuelle', lastname:'Camomille'},
			{ firstname:'Pierre', lastname:'Quiroule'},
			{ firstname:'Hubert', lastname:'Lechat'},
			{ firstname:'Rosy', lastname:'Alpub'},
			{ firstname:'Dobromir', lastname:'Nikolov'},
			{ firstname:'Jean Schmidt', lastname:'Schmidt'},
			{ firstname:'Irène', lastname:'Clement'},
			{ firstname:'Chantal', lastname:'Lobby'},
			{ firstname:'Pierre', lastname:'Yves de Tassigny'},
			{ firstname:'Jean', lastname:'de laFontaine'}
		];	

		$scope.click = function(user) {
			loginService.setUser(user);
			window.location.href = "http://" + window.location.hostname + ":9000/#/userDetails";
		}

		loginService.getUsers()
    	.then(function() {	
			$scope.isLoading = false;
		})
		.catch(function (error) {
			console.error("[MainCtrl] getUsers error");
		});
}]);