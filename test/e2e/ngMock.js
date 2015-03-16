angular.module('myAppDev',
    ['myApp', 'ngMockE2E'])
    .run(function($httpBackend) {
        phones = [{name: 'phone1'}, {name: 'phone2'}];

        // returns the current list of phones
        $httpBackend.whenGET('/mb/!pkg_w_ms_main.operation').respond(phones);

        // adds a new phone to the phones array
        $httpBackend.whenPOST('/mb/!pkg_w_ms_main.operation').respond(function(method, url, data) {
            var phone = angular.fromJson(data);
            phones.push(phone);
            return [200, phone, {}];
        });
        $httpBackend.whenGET(/^\/templates\//).passThrough();
    });
