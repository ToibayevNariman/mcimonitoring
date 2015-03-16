angular
    .module('App.auth')
    .factory('authorization', ['$resource', function($resource){
        return $resource('/mb/!pkg_w_ms_main.operation', {}, {
            isConnect: {
                method: 'GET',
                data: {
                    action: 'IS_CONNECT'
                }
            },
            auth: {
                method: 'POST',
                isArray:false
            }
        });
    }]);
