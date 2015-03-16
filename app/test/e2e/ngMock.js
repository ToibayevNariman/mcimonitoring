(function (ng) {
    var is_connect = {
        success: false
    };

    var auth = {
        success: true
    };

    ng
        .module('MCImonitoring')
        .config(['$provide', function($provide) {
            $provide.decorator('$httpBackend', ng.mock.e2e.$httpBackendDecorator);
        }])
        .run(['$httpBackend', function($httpBackend) {
            $httpBackend.whenGET('/mb/!pkg_w_ms_main.operation').respond(is_connect);

            $httpBackend.whenPOST('/mb/!pkg_w_ms_main.operation').respond(function(method, url, data, headers){
                data = angular.fromJson(data);
                if(data.username === '7775846848' && data.password === '123'){
                    is_connect.success = true;
                    return [200, auth, {}];
                }else{
                    return [200, is_connect, {}];
                };
            });

            // Catch-all pass through for all other requests
            $httpBackend.whenGET(/.*/).passThrough();
            $httpBackend.whenPOST(/.*/).passThrough();
            $httpBackend.whenDELETE(/.*/).passThrough();
            $httpBackend.whenPUT(/.*/).passThrough();
        }]);

})(angular);
