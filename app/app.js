// Qui andranno il modulo principale di angular e la sua configurazione con il route provider


var electronApp = angular.module('electronApp', ['ngRoute','prodotti','materie']);

electronApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: './app/views/home.html'

        })
        .when('/prodotti', {
            templateUrl: './app/views/prodotti.html',
            controller: 'prodottiCtrl'
        })
        .when('/materieprime', {
            templateUrl: './app/views/materieprime.html',
            controller: 'materieprimeCtrl'
        })
        .when('/clienti', {
            templateUrl: './app/views/clienti.html',
            
        })
        .when('/fornitori', {
            templateUrl: './app/views/fornitori.html',
            
        })
        .when('/fattureacquisto', {
            templateUrl: './app/views/fattureacquisto.html',
            
        })
        .when('/fatturevendita', {
            templateUrl: './app/views/fatturevendita.html',
            
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);