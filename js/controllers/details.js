angular.module('Celebrities')

.controller('DetailsCtrl', function($scope, $routeParams, Data) {
     Data.getCelebritiesData()
    .then(function successCallback(response) {
        $scope.celebritiesData = response.data
        //create a method in the scope that will take each item and compare its id to the routing id.
        //use this method in a filter in details.html
        //P.S: if i were comparing strings the below method, i can simply use a filter to compare the strings
        //But for some reason the filter didn't work with integers.
        $scope.filterId = function(item){
            return item.id == $routeParams.itemId;
            };

      }, function errorCallback(response) {
        console.log('could not fetch data');
      });



});
