/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

angular.module('MCImonitoring')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$ocLazyLoadProvider',
        'APP_REQUIRES',
        'RouteHelpersProvider',
    function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, appRequires, helper) {
        'use strict';

        angular.module('MCImonitoring').controller = $controllerProvider.register;
        angular.module('MCImonitoring').directive = $compileProvider.directive;
        angular.module('MCImonitoring').filter = $filterProvider.register;
        angular.module('MCImonitoring').factory = $provide.factory;
        angular.module('MCImonitoring').service = $provide.service;
        angular.module('MCImonitoring').constant = $provide.constant;
        angular.module('MCImonitoring').value = $provide.value;

        // LAZY MODULES
        // -----------------------------------

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: appRequires.modules
        });


        // default route
        $urlRouterProvider.otherwise('app/preload');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: helper.basepath('app.html'),
                controller: 'AppController',
                resolve: helper.resolveFor('icons')
            })
            .state('app.preload', {
                url: '/preload',
                title: 'MCImonitoring',
                templateUrl: helper.basepath('empty-view.html')
            })
            .state('app.dashboard', {
                url: '/dashboard',
                title: 'MCI Dashboard',
                templateUrl: helper.basepath('dashboard.html')
            })
            .state('app.submenu', {
                url: '/submenu',
                title: 'Submenu',
                templateUrl: helper.basepath('submenu.html')
            })
            .state('page', {
                url: '/page',
                templateUrl: 'views/page.html',
                resolve: helper.resolveFor('icons')
            })
            .state('page.login', {
                url: '/login',
                title: 'Login',
                templateUrl: 'views/login.html'
            })
            .state('page.secondfactor', {
                url: '/secondfactor',
                title: 'Second factor authentication',
                templateUrl: 'views/secondFactor.html'
            });

    }]).config(['$translateProvider', function ($translateProvider) {
        'use strict';

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('ru');
        $translateProvider.useLocalStorage();

    }]).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        'use strict';

        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }])
    .controller('NullController', function () {});
