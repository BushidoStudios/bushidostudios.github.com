var app = angular.module('app', ['ngMaterial', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      controllerAs: 'home'
    })
    .when('/portfolio/:portfolioId/', {
      templateUrl: 'templates/portfolio.html',
      controller: 'portfolioCtrl',
      controllerAs: 'portfolio'
    })
    .otherwise({
      templateUrl: 'templates/404.html'
    });
    
    $locationProvider.html5Mode({
      enabled: true
    });
}])
.controller('homeCtrl', ['$routeParams', function ($routeParams) {
}])
.controller('portfolioCtrl', ['$routeParams', function ($routeParams) {
}]);