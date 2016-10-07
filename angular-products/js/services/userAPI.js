(function () {
	'use strict';

	angular
		.module('app')
		.factory('userAPI', userAPI);

		userAPI.$inject = ['$http'];

		function userAPI($http) {
			var _login = function (user) {
				return $http.post('http://localhost:3442/users/login', user);
			};
			return{
				login:_login
			}
		}
})()