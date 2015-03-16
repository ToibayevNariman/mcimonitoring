/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

angular
    .module('App.auth')
    .controller('LoginCtrl', ['$scope', '$http', '$state', '$cookies', 'authorization', function ($scope, $http, $state, $cookies, authorization) {

    "use strict";
    // bind here all data from the form
    $scope.account = {
        username: $cookies.username || '+7',
        token: $cookies.token || ''
    };

    $scope.account.remember = ($scope.account.username !== '+7');

    // place the message if something goes wrong
    $scope.authMsg = '';

    $scope.login = function () {
        $scope.authMsg = '';

        //var product = new authServices({username: $scope.account.username, password: $scope.account.password});

        //product.$update();

        authorization.auth($scope.account, function(response){
            if (!response.success) {
                $scope.password = '';
                $scope.authMsg = 'Не верный логин пароль...';
            } else {
                if( $scope.account.remember ){
                    $cookies.username = $scope.account.username;
                }
                if (!response.secondFactor){
                    $state.go('page.secondfactor');
                } else {
                    $state.go('app.dashboard');
                }
            }
        });
    };

}]);
