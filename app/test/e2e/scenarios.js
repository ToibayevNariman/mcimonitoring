'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {

    beforeEach(function () {
        browser.get('#/page/login');
        browser.debugger();
        expect(browser.getTitle()).toEqual('MCImonitoring');
    });

    it('should filter the phone list as a user types into the search box', function() {
        var username = element(by.model('account.username')),
            password = element(by.model('account.password'));

        username.sendKeys('+77775846848');
        password.sendKeys('orapas#123');

        expect(password.getText()).toBe('orapas#123');
    });

    //it('should redirect index.html to index.html#/phones', function() {
    //    browser.get('app/index.html');
    //    browser.getLocationAbsUrl().then(function(url) {
    //        expect(url.split('#')[1]).toBe('/page/login');
    //    });
    //});
});
