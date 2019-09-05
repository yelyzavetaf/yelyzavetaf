var appl = angular.module('app',['ngRoute', 'tasks', 'logIn', 'register']);

appl.controller("HostAppCtrl", function ($scope, $http) {

    $http.get ('quotes.json').then(function (response) {$scope.mainQuote = response.data.mainQuote;});
    $http.get ('quotes.json').then(function (response) {$scope.quotes = response.data.quotes;} );

  
});
