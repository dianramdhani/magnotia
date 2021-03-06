(function () {
    'use strict';

    window.app
        .service('applicationPoolService', applicationPoolService);

    applicationPoolService.$inject = ['$http', '$q', '$rootScope', 'CONFIG'];
    function applicationPoolService($http, $q, $rootScope, CONFIG) {
        this.getApplicationSuiteList = getApplicationSuiteList;
        this.getApplicationInstanceList = getApplicationInstanceList;
        this.executeInstanceOperation = executeInstanceOperation;
        this.getOrchestratorServiceList = getOrchestratorServiceList;
        this.getApplication = getApplication;
        this.getApplicationList = getApplicationList;
        this.getApplicationInstance = getApplicationInstance;
        this.getApplicationInstanceProperties = getApplicationInstanceProperties;
        this.getApplicationProperties = getApplicationProperties;
        this.getApplicationSuite = getApplicationSuite;
        this.getInstanceSchedulerList = getInstanceSchedulerList;
        this.getOrchestratorService = getOrchestratorService;
        this.saveApplicationSuite = saveApplicationSuite;
        this.removeApplicationSuite = removeApplicationSuite;
        this.saveApplicationInstance = saveApplicationInstance;
        this.removeApplicationInstance = removeApplicationInstance;
        this.saveInstanceScheduler = saveInstanceScheduler;
        this.removeInstanceSchedule = removeInstanceSchedule;
        this.startInstanceScheduler = startInstanceScheduler;
        this.stopInstanceScheduler = stopInstanceScheduler;

        const url = CONFIG.apppool, removeEmpty = (obj) => {
            Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);
            return obj;
        }
        let headers = {};
        if ($rootScope.globals.currentUser) {
            headers['token'] = '1234';
        }

        // APPLICATION
        function getApplicationList(id = null, name = null, description = null, orchestratorId = null) {
            let q = $q.defer(),
                params = removeEmpty({ id, name, description, orchestratorId });
            $http.get(`${url}/application/list`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function getListByOrchestrator(orchestratorId) { }
        function saveApplication(application) { }
        function getApplication(applicationId) {
            let q = $q.defer(),
                params = { applicationId };
            $http.get(`${url}/application/get`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function removeApplication(applicationId) { }
        function executeApplication(applicationId, orchestratorServiceId) { }
        function executeApplicationCustom(applicationId, orchestratorServiceId, serviceName) { }
        function addApplicationProperties(applicationId, properties) { }
        function getApplicationProperties(applicationId) {
            let q = $q.defer(),
                params = { applicationId };
            $http.get(`${url}/application/get_properties`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function getApplicationTemplates(applicationId) { }
        function removeApplicationProperty(applicationPropertyId) { }
        function getApplicationInstanceList(applicationSuiteId) {
            let q = $q.defer(),
                params = { applicationSuiteId };
            $http.get(`${url}/applicationInstance/list`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveApplicationInstance(instance) {
            let q = $q.defer();
            $http.post(`${url}/applicationInstance/save`, instance, { headers }).then(res => q.resolve(res.data));
            return q.promise;
        }

        // APPLICATION INSTANCE
        function getApplicationInstance(applicationInstanceId) {
            let q = $q.defer(),
                params = { applicationInstanceId };
            $http.get(`${url}/applicationInstance/get`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function removeApplicationInstance(applicationInstanceId) {
            let q = $q.defer(),
                params = { applicationInstanceId };
            $http.get(`${url}/applicationInstance/remove`, { params, headers }).then(res => q.resolve(res.data)).catch(err => q.reject(err.data));
            return q.promise;
        }
        function executeInstanceOperation(applicationInstanceId, orchestratorServiceId) {
            let q = $q.defer(),
                params = { applicationInstanceId, orchestratorServiceId };
            $http.get(`${url}/applicationInstance/execute`, { params, headers }).then(res => q.resolve(res.data)).catch(err => q.reject(err.data));
            return q.promise;
        }
        function addApplicationInstanceProperties(applicationInstanceId, properties) { }
        function getApplicationInstanceProperties(applicationInstanceId) {
            let q = $q.defer(),
                params = { applicationInstanceId };
            $http.get(`${url}/applicationInstance/get_properties`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
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
            $http.get(`${url}/orchestratorService/list`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveOrchestratorService(orchestratorId, orchestratorService) { }
        function getOrchestratorService(orchestratorServiceId) {
            let q = $q.defer(),
                params = { orchestratorServiceId };
            $http.get(`${url}/orchestratorService/get`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function removeOrchestratorService(orchestratorServiceId) { }
        function getApplicationSuiteList(tenant, applicationSuiteName = null) {
            let q = $q.defer(),
                params = removeEmpty({ tenant, applicationSuiteName });
            $http.get(`${url}/applicationSuite/list`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveApplicationSuite(applicationSuite) {
            let q = $q.defer();
            $http.post(`${url}/applicationSuite/save`, applicationSuite, { headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function getApplicationSuite(applicationSuiteId) {
            let q = $q.defer(),
                params = { applicationSuiteId };
            $http.get(`${url}/applicationSuite/get`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function removeApplicationSuite(applicationSuiteId) {
            let q = $q.defer(),
                params = { applicationSuiteId };
            $http.get(`${url}/applicationSuite/remove`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }

        // EVENT SERVICE
        function getEventList(id, name, orchestratorId) { }
        function saveEvent(event) { }
        function getEvent(eventId) { }
        function removeEvent(eventId) { }
        function removeEventService(eventServiceId) { }
        function getEventServices(eventId) { }
        function addServices(eventId, eventService) { }

        // INSTANCE SCHEDULER SERVICE
        function getInstanceSchedulerList(applicationInstanceId) {
            let q = $q.defer(),
                params = { applicationInstanceId };
            $http.get(`${url}/instanceScheduler/list`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function getInstanceSchedule(scheduleId) { }
        function removeInstanceSchedule(scheduleId) {
            let q = $q.defer(),
                params = { scheduleId };
            $http.get(`${url}/instanceScheduler/remove`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function saveInstanceScheduler(instanceSchedule) {
            let q = $q.defer();
            $http.post(`${url}/instanceScheduler/save`, instanceSchedule, { headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function startInstanceScheduler(scheduleId) {
            let q = $q.defer(),
                params = { scheduleId };
            $http.get(`${url}/instanceScheduler/start`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function stopInstanceScheduler(scheduleId) {
            let q = $q.defer(),
                params = { scheduleId };
            $http.get(`${url}/instanceScheduler/stop`, { params, headers }).then(res => q.resolve(res.data));
            return q.promise;
        }
        function isInstanceSchedulerRunning(scheduleId) { }
    }
})();