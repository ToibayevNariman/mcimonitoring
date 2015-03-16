/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

angular
    .module('App.auth')
    .controller('SecondFactorCtrl', ['$scope', '$http', '$state', '$cookies', 'authorization', function ($scope, $http, $state, $cookies, authorization) {

    "use strict";
    // bind here all data from the form
    $scope.account = {
        username: $cookies.username || '+7'
    };

    $scope.account.remember = ($scope.account.username !== '+7');

    // place the message if something goes wrong
    $scope.authMsg = '';

    $scope.login = function () {
        $scope.authMsg = '';

        $state.go('app.dashboard');
    };

}]);
