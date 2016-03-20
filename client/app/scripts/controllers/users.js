'use strict';


angular.module('clientApp').controller('usersController', [
	
	'$scope', 

	function($scope) {
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
}]);