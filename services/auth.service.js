(function () {
    'use strict';

    window.app
        .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q', '$rootScope', '$cookies', '$state', 'md5', 'CONFIG'];
    function AuthService($http, $q, $rootScope, $cookies, $state, md5, CONFIG) {
        this.login = login;
        this.logout = logout;

        const url = CONFIG.tenant;

        function login(username, password) {
            let q = $q.defer();
            $http.post(`${url}/loginService/login`, {
                username,
                encryptPassword: md5.createHash(password)
            }).then(res => {
                let currentUser = res.data;
                $rootScope['globals'] = { currentUser };
                let cookieExp = new Date();
                cookieExp.setDate(cookieExp.getDate() + 7);
                $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
                q.resolve(currentUser);
            }).catch(err => q.reject(err.data));
            return q.promise;
        }

        function logout() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $state.go('login');
        }
    }
})();