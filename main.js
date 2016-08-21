var app = angular.module('app', ['ngMaterial', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', '$mdThemingProvider', function($routeProvider, $locationProvider, $mdThemingProvider) {
  
  $mdThemingProvider.theme('default')
  .dark()
  .primaryPalette('pink')
  .accentPalette('orange');
  
  $mdThemingProvider.theme('bushido')
  .dark()
  .primaryPalette('blue')
  .accentPalette('orange');
  
  $mdThemingProvider.alwaysWatchTheme(true);
  
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
.controller('mainCtrl', ['$routeParams', '$scope', function ($routeParams, $scope) {
  $scope.theme = 'bushido';
}])
.controller('homeCtrl', ['$routeParams', function ($routeParams) {
}])
.controller('portfolioCtrl', ['$routeParams', function ($routeParams) {
}]);