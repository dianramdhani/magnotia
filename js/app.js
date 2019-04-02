require('./config');

window.app = angular.module('Magnotia', ['ui.router', 'angular-md5', 'ngCookies']);

(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$rootScope', '$cookies', '$http'];
    function Run($rootScope, $cookies, $http) {
        $rootScope.globals = angular.fromJson($cookies.get('globals')) || {};
        $rootScope.globals['config'] = window.config;
        if ($rootScope.globals.currentUser) {
            // $http.defaults.headers.common['token'] = $rootScope.globals.currentUser.token;
            $http.defaults.headers.common['token'] = '1234';
        }
    }
})();

// routes
// app
require('../routes/app.route');
// app/tenant-user
require('../routes/tenant-user.route');
// app/tenant-user/application-suite
require('../routes/application-suite.route');

// services
// AuthService
require('../services/auth.service');
// applicationPoolService
require('../services/application-pool.service');

// components
// search
require('../components/search/search');

// views
// login login
require('../views/login/login');
// tenantUserContainer tenant-user-container
require('../views/tenant-user/container/container');
// tenantUserApplicationSuiteContainer tenant-user-application-suite-container
require('../views/tenant-user/application-suite/container/container');
// tenantUserApplicationSuiteHome tenant-user-application-suite-home
require('../views/tenant-user/application-suite/home/home');
// tenantUserApplicationSuiteFormNewInstance tenant-user-application-suite-form-new-instance
require('../views/tenant-user/application-suite/form-new-instance/form-new-instance');
// tenantUserApplicationSuiteModalNewApplicationSuite tenant-user-application-suite-modal-new-application-suite
require('../views/tenant-user/application-suite/modal-new-application-suite/modal-new-application-suite');
// tenantUserApplicationSuiteFormUpdateApplicationInstance tenant-user-application-suite-form-update-application-instance
require('../views/tenant-user/application-suite/form-update-application-instance/form-update-application-instance');