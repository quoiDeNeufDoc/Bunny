'use strict';


angular.module('clientApp').controller('usersController', [
	
	'$scope', 
	'loginService',

	function($scope, loginService) {
		$scope.users = [
			{ firstName:'Jean Claude', lastName:'Dusse'},
			{ firstName:'Lucien', lastName:' Bigard'},
			{ firstName:'Emmanuelle', lastName:'Camomille'},
			{ firstName:'Pierre', lastName:'Quiroule'},
			{ firstName:'Hubert', lastName:'Lechat'},
			{ firstName:'Rosy', lastName:'Alpub'},
			{ firstName:'Dobromir', lastName:'Nikolov'},
			{ firstName:'Jean Schmidt', lastName:'Schmidt'},
			{ firstName:'Irène', lastName:'Clement'},
			{ firstName:'Chantal', lastName:'Lobby'},
			{ firstName:'Pierre', lastName:'Yves de Tassigny'},
			{ firstName:'Jean', lastName:'de laFontaine'}
		];	

		$scope.click = function(user) {
			loginService.setUser(user);
			window.location.href = "http://" + window.location.hostname + ":9000/#/userDetails";
		}
}]);