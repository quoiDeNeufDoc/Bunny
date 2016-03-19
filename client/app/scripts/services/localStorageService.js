"use strict";

angular.module('clientApp').service('localStorage', [

	'$q',
	'$rootScope',
	'$log',

	function($q, $rootScope, $log) 
	{
		/*********************************************************/
		/**            CHROME APP IMPLEMENTATION                **/
		/*********************************************************/
		this.get = function(keys) {
			var result = {};
			for (var i=0; i<keys.length; i++) 
				result[keys[i]] = localStorage.getItem(keys[i]);
			return $q.when(result);
		}

		this.set = function(object) {
			var keys = Object.keys(object)
			for (var i=0; i<keys.length; i++) 
				localStorage.setItem(keys[i], object[keys[i]]);
			return $q.when();
		}

		this.remove = function(keys) {
			for (var i=0; i<keys.length; i++) 
				localStorage.removeItem(keys[i]);
			return $q.when();
		}
		
	}

]);