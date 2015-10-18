angular.module('Celebrities')

.controller('MainCtrl', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'data/celebrities-data.json'
    }).then(function successCallback(response) {
        $scope.celebritiesData = response.data
      }, function errorCallback(response) {
        console.log('could not fetch data');
      });

    });
