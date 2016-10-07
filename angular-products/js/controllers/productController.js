(function () {
  'use strict';

  angular
    .module('app')
    .controller('productController', productController);

    productController.$inject = ['productAPI', '$scope'];

    function productController(productAPI, $scope) {

      $scope.products = [];

      $scope.list = function () {
        productAPI.list().success(function (data) {
          $scope.products = data;
        });
      }
    }
})();
