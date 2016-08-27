angular.module('app').config(function ($routeProvider) {
  $routeProvider
    .when('/'),{
      templateUrl: 'ocorrencia.html',
      controller: 'zumbisCtrl'
    }
})
