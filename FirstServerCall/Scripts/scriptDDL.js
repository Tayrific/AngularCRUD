var app = angular.module('MyApp', ['angularUtils.directives.dirPagination']);

app.controller('CustomerController', function ($scope, $http) {
    $scope.GetCustomers = function () {
       // alert('Hi checking');
        $http.get('/Customer/Index').then(function (response) {
            $scope.MyValue = response.data;
        });
    };

});



app.controller('CustomerOrderController', function ($scope, $http) {
    
    $scope.Sort = function (col) {
        $scope.key = col;
        $scope.AscOrDesc = !$scope.AscOrDesc;
    }


    $scope.GetCustomerOrders = function () {
        //alert('Hi checking');
        $http.get('/Order/GetByCustomerID/').then(function (response) {
            $scope.MyOrders = response.data;
        })
    };



    $scope.GetCustomerOrdersbyId = function (Id) {
       // alert('Hi checking');
        $http.get('/Order/GetByCustomerID/' + Id).then(function (response) {
            $scope.MyOrders = response.data;
        });
    };
});


app.filter("filterdate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});





