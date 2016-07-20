angular.module("listaTelefonica").controller("listaTelefonicaController", function ($scope, $http) {

  $scope.app = "Lista Telefonica";

  $scope.contatos = [];

  $scope.operadoras = [];

  var carregarContatos = function(){
    $http.get("http://localhost:3412/contatos").success(function (data, status) {
      $scope.contatos = data;
    }).error(function (data, status) {
      $scope.message = "Acontecey um problema: " + data;
    });
  };

  var carregarOperadoras = function () {
    $http.get("http://localhost:3412/operadoras").success(function (data, status) {
      $scope.operadoras = data;
    });
  };

  $scope.adicionarContato = function(contato){
    contato.data = new Date();
    $http.post("http://localhost:3412/contatos", contato).success(function (data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };

  $scope.apagarContatos = function(){
    var contatosSelecionados = contatos.filter(function (contato){
      if(contato.selecionado){
        return contato
      };
    });
  };

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function (campo) {
    $scope.criterioOrdenacao = campo;
    $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();

});
