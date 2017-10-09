var ourApp = angular.module('todoApp', []);

ourApp.service('NetworkService', function ($http) {

    this.submitUserDetailsToServer = function (name, password) {
        $http.post('localhost:9000/Application/index', {
            "NameOfTheUser": name,
            "PasswordOfTheUser": password
        });
    };
});

ourApp.controller('MyController', function ($scope) {

    $scope.submitUserDetails = function () {
        if ($scope.validateName()) {
            return;
        }

    };

    $scope.validateName = function () {
        if (!$scope.nameOfTheUser || $scope.nameOfTheUser.length < 3) {
            $scope.hasNameError = true;
            return false;
        }
        $scope.hasNameError = false;
        return true;
    }

});