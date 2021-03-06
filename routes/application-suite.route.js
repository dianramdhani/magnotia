(function () {
    'use strict';

    window.app
        .config(TenantUserRoute);

    TenantUserRoute.$inject = ['$stateProvider'];
    function TenantUserRoute($stateProvider) {
        let states = [
            { name: 'tenantUser.applicationSuite.home', url: '/application-suite', component: 'tenantUserApplicationSuiteHome' },
            { name: 'tenantUser.applicationSuite.home.applicationInstance', url: '/{applicationSuiteId}', component: 'tenantUserApplicationSuiteTableApplicationInstance' },
            { name: 'tenantUser.applicationSuite.formNewInstance', url: '/new-instance/{applicationSuiteId}', component: 'tenantUserApplicationSuiteFormNewInstance' },
            { name: 'tenantUser.applicationSuite.formUpdateInstance', url: '/reconfigure-instance/{applicationSuiteId}/{applicationInstanceId}', component: 'tenantUserApplicationSuiteFormUpdateApplicationInstance' },
            { name: 'tenantUser.applicationSuite.listSchedulerApplicationInstance', url: '/scheduler/{applicationSuiteId}/{applicationInstanceId}', component: 'tenantUserApplicationSuiteListSchedulerApplicationInstance' },
            { name: 'tenantUser.applicationSuite.output', url: '/output/{applicationSuiteId}/{applicationInstanceId}', component: 'tenantUserApplicationSuiteOutputApplicationInstance' }
        ];
        states.forEach(state => $stateProvider.state(state));
    }
})();