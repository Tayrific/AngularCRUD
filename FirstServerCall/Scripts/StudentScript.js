var app = angular.module('StudentApp', ['angularUtils.directives.dirPagination']);

//viewing all students
app.controller('StudentController', function ($scope, $http) {
    $scope.GetStudents = function () {
        $http.get('/Student/Index').then(function (response) {
            console.log(response.data); 
            $scope.StudentData = response.data;
        });
    };
    $scope.GetStudents();

    $scope.deleteStudent = function (studentId) {
        if (confirm('Are you sure you want to delete this student?')) {
            $http.delete('/Student/Delete/' + studentId).then(function (response) {
                console.log('Student deleted successfully:', response.data);
                // Refresh student list after deletion
                $scope.GetStudents();
            }, function (error) {
                console.error('Error deleting student:', error);
            });
        }
    };
});

//viewing single student
app.controller('StudentDetailsController', function ($scope, $http) {
    // Get current URL and ID
    var url = window.location.href;
    var studentId = getUrlParameter(url, 'id');

    if (!studentId) {
        console.error('No student ID provided.');   
        return;
    }

    // HTTP request to fetch student details
    $http.get('/Student/Details?id=' + studentId).then(function (response) {
        $scope.student = response.data;
    }, function (error) {
        console.error('Error fetching student details:', error);
        // Handle error loading student details
    });

    // Function to parse query parameters from URL
    function getUrlParameter(url, name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
});
//Adding a new student
app.controller('AddStudentController', function ($scope, $http) {

    $scope.newStudent = {};
    $scope.AddStudent = function () {
        $http.post('/Student/Create', $scope.newStudent).then(function (response) {

            window.location.href = 'ViewStudents.html';
        }, function (error) {
            console.error('Error occurred:', error);
        });
    };
});


