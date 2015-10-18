angular.module('Celebrities')

.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:itemId', {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

});
