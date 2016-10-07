(function () {

  'use strict';

  angular
    .module('app')
    .factory('productAPI', productAPI);

    productAPI.$inject = ['$http'];

    function productAPI($http) {
      var _list = function () {
        return $http.get('http://localhost:3442/products/')
      };

      return{
        list:_list
      }
    }

})();
