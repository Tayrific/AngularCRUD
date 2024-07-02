var app = angular.module('MyApp', []);
app.controller('MyController', function($scope){
    $scope.MyVal = "Welcome to Angular.js";

    $scope.MyFun = function()
    {
        alert('Hello World: ');
    }

    $scope.MyFun2 = function (val) {
        alert('parameter passed:  ' + val);
    }
});