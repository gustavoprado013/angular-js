angular.module('app').controller('zumbisCtrl', function($scope) {
    $scope.ocorrencias = [];
    $scope.adiciona = function(ocorrencia, formIsValid) {
            $scope.ocorrencias.push(angular.copy(ocorrencia));
    };
});
