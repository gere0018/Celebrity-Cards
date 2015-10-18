angular.module('Celebrities')

.controller('DetailsCtrl', function($scope, $routeParams) {
    $scope.id= $routeParams.itemId;

});
