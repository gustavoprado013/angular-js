(function () {

  'use strict'

  angular
    .module('app')

    .config(authPush);

    authPush.$inject = ['$httpProvider']

    function authPush($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    }

})();
