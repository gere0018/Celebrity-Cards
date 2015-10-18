angular.module('Celebrities')

.controller('MainCtrl', function($scope, $http, Data) {

    Data.getCelebritiesData()
    .then(function successCallback(response) {
        $scope.celebritiesData = response.data
      }, function errorCallback(response) {
        console.log('could not fetch data');
      });

 });
