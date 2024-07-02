var app = angular.module('calcApp', []);

// This is service method
//app.service('MyCalService', function () {
//    this.add = function (a, b) { return parseInt(a) + parseInt(b); };
//    this.sub = function (a, b) { return parseInt(a) - parseInt(b); };
//    this.mul = function (a, b) { return parseInt(a) * parseInt(b); };
//    this.div = function (a, b) { return parseInt(a) / parseInt(b); };
//});

//This is factory mathod
app.service('MyCalService', function () {
    fact = {};
    fact.add = function (a, b) { return parseInt(a) + parseInt(b); };
    fact.sub = function (a, b) { return parseInt(a) - parseInt(b); };
    fact.mul = function (a, b) { return parseInt(a) * parseInt(b); };
    fact.div = function (a, b) { return parseInt(a) / parseInt(b); };
    return fact;
});

app.controller('svcController', function ($scope, MyCalService) {
    
    $scope.Add = function (a,b) {
        $scope.result = MyCalService.add(a, b);
    }
    $scope.Sub = function (a,b) {
        $scope.result = MyCalService.sub(a, b);
    }
    $scope.Mul = function (a,b) {
        $scope.result = MyCalService.mul(a, b);
    }
    $scope.Div = function (a,b) {
        $scope.result = MyCalService.div(a, b);
    }
});