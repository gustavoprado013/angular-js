(function () {

  'use strict'

  angular
    .module('app')
    .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$rootScope', '$q'];

    function authInterceptor($rootScope, $q) {
      return {
        request: function (config) {
          config.headers = config.headers || {};

          if(localStorage.token){
            config.headers.authorization = localStorage.token;
          }

          return config;
        },
        response: function (response) {
          if(response.status === 403){
            console.log("Forbidden")
          }
          return response;
        }
      }
    }

})();
