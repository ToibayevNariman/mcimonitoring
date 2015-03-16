'use strict';

/**
 * @ngdoc overview
 * @name MCImonitoring
 * @description
 * # MCImonitoring
 *
 * Main module of the application.
 */
angular.module('MCImonitoring', [
        'ngRoute',
        'ngAnimate',
        'ngStorage',
        'ngCookies',
        'pascalprecht.translate',
        'ui.bootstrap',
        'ui.router',
        'oc.lazyLoad',
        'cfp.loadingBar',
        'ngSanitize',
        'ngResource',
        'ui.utils',
        'App.auth'
    ])
    .run([
        '$rootScope',
        '$state',
        '$stateParams',
        '$window',
        //'$templateCache',
        function ($rootScope, $state, $stateParams, $window/*, $templateCache*/) {
            // Set reference to access them from any scope

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$storage = $window.localStorage;

            // Uncomment this to disables template cache
            /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
             if (typeof(toState) !== 'undefined'){
             $templateCache.remove(toState.templateUrl);
             }
             });*/

            // Scope Globals
            // -----------------------------------
            $rootScope.app = {
                name: 'MCImonitoring',
                description: 'Мониторинг состояния системы MCI',
                year: ((new Date()).getFullYear()),
                layout: {
                    isFixed: true,
                    isCollapsed: false,
                    isBoxed: false,
                    isRTL: false
                },
                viewAnimation: 'ng-fadeInUp'
            };
        }
    ]);
