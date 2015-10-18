angular.module('Celebrities')
//creating a service call Data that will handle fetching the data which will be used by my controllers.
.factory('Data', function DataFactory($http){
    return {
        getCelebritiesData: function(){
                return $http({method: 'GET', url: 'data/celebrities-data.json'});

           }
    }

});
