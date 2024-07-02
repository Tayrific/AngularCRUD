var app = angular.module('MyApp', [])

app.controller('CustomerController', function ($scope, $http)
{
    $scope.GetCustomers = function ()
    {
        alert('Hi checking');
    };

    $http.get('/Customer/Index').then(function (response)
    {
        $scope.MyValue = response.data;
    });
});