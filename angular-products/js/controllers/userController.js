(function () {
	'use strict';

	angular
		.module('app')
		.controller('userController', userController);

		userController.$inject = ['userAPI', '$scope'];

		function userController(userAPI, $scope) {

			$scope.login = function (user) {
				userAPI.login(user).success(function(data){
					localStorage.setItem('token', data);
				});
			}

			$scope.logout = function () {
				localStorage.removeItem('token');
			}
		}

})()