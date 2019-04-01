(function () {
    'use strict';

    window.app
        .service('applicationPoolService', applicationPoolService);

    applicationPoolService.$inject = ['$http', '$q', '$rootScope'];
    function applicationPoolService($http, $q, $rootScope) {
        this.getApplicationSuiteList = getApplicationSuiteList;
        this.getApplicationInstanceList = getApplicationInstanceList;
        this.executeInstanceOperation = executeInstanceOperation;
        this.getOrchestratorServiceList = getOrchestratorServiceList;
        this.getApplication = getApplication;


        const url = $rootScope.globals.config.apppool;
        const removeEmpty = (obj) => {
            Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);
            return obj;
        }

        // APPLICATION
        function getApplicationList(id = null, name = null, description = null, orchestratorId = null) { }
        function getListByOrchestrator(orchestratorId) { }
        function saveApplication(application) { }
        function getApplication(applicationId) {
            let q = $q.defer(),
                params = { applicationId };
            $http.get(`${url}/application/get`, { params }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function removeApplication(applicationId) { }
        function executeApplication(applicationId, orchestratorServiceId) { }
        function executeApplicationCustom(applicationId, orchestratorServiceId, serviceName) { }
        function addApplicationProperties(applicationId, properties) { }
        function getApplicationProperties(applicationId) { }
        function getApplicationTemplates(applicationId) { }
        function removeApplicationProperty(applicationPropertyId) { }
        function getApplicationInstanceList(applicationSuiteId) {
            let q = $q.defer(),
                params = { applicationSuiteId };
            $http.get(`${url}/applicationInstance/list`, { params }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveApplicationInstance(instance) { }

        // APPLICATION INSTANCE
        function getApplicationInstance(applicationInstanceId) { }
        function removeApplicationInstance(applicationInstanceId) { }
        function executeInstanceOperation(applicationInstanceId, orchestratorServiceId) {
            let q = $q.defer(),
                params = { applicationInstanceId, orchestratorServiceId };
            $http.get(`${url}/applicationInstance/execute`, { params }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function addApplicationInstanceProperties(applicationInstanceId, properties) { }
        function getApplicationInstanceProperties(applicationInstanceId) { }
        function removeApplicationInstanceProperty(applicationInstancePropertyId) { }

        // ORCHESTRATOR
        function getOrchestratorList() { }
        function saveOrchestrator(orchestrator) { }
        function getOrchestrator(orchestratorId) { }
        function removeOrchestrator(orchestratorId) { }
        function executeOrchestrator(orchestratorServiceId) { }

        // ORCHESTRATOR SERVICE
        function getOrchestratorServiceList(orchestratorId, applicationService = null, instanceService = null, name = null) {
            let q = $q.defer(),
                params = removeEmpty({ orchestratorId, applicationService, instanceService, name });
            $http.get(`${url}/orchestratorService/list`, { params }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveOrchestratorService(orchestratorId, orchestratorService) { }
        function getOrchestratorService(orchestratorServiceId) { }
        function removeOrchestratorService(orchestratorServiceId) { }
        function getApplicationSuiteList(tenant, applicationSuiteName = null) {
            let q = $q.defer(),
                params = removeEmpty({ tenant, applicationSuiteName });
            $http.get(`${url}/applicationSuite/list`, { params }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveApplicationSuite(applicationSuite) { }
        function getApplicationSuite(applicationSuiteId) { }
        function removeApplicationSuite(applicationSuiteId) { }

        // EVENT SERVICE
        function getEventList(id, name, orchestratorId) { }
        function saveEvent(event) { }
        function getEvent(eventId) { }
        function removeEvent(eventId) { }
        function removeEventService(eventServiceId) { }
        function getEventServices(eventId) { }
        function addServices(eventId, eventService) { }

        // INSTANCE SCHEDULER SERVICE
        function getInstanceSchedulerList(applicationInstanceId) { }
        function getInstanceSchedule(scheduleId) { }
        function removeInstanceSchedule(scheduleId) { }
        function saveInstanceScheduler(instanceSchedule) { }
        function startInstanceScheduler(scheduleId) { }
        function stopInstanceScheduler(scheduleId) { }
        function isInstanceSchedulerRunning(scheduleId) { }
    }
})();