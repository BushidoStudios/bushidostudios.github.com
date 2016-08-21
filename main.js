var app = angular.module('app', ['ngMaterial', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      controllerAs: 'home'
    })
    .when('portfolio/:portfolioId/', {
      templateUrl: 'templates/portfolio.html',
      controller: 'portfolioCtrl',
      controllerAs: 'portfolio'
    })
    .when('404', {
      templateUrl: 'templates/404.html'
    })
    .when('500', {
      templateUrl: 'templates/500.html'
    })
    .otherwise({
      redirectTo: '/404'
    });
    
    $locationProvider.html5Mode({
      enabled: true
    });
}])
.controller('homeCtrl', ['$routeParams', function ($routeParams) {
}])
.controller('portfolioCtrl', ['$routeParams', function ($routeParams) {
}]);