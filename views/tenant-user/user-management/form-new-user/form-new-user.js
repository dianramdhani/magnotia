(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('tenantUserUserManagementFormNewUser', {
            template: require('./form-new-user.html'),
            controller: tenantUserUserManagementFormNewUserController
        });

    tenantUserUserManagementFormNewUserController.$inject = ['$scope', '$rootScope', '$element', '$compile', '$state', 'TenantUserService'];
    function tenantUserUserManagementFormNewUserController($scope, $rootScope, $element, $compile, $state, TenantUserService) {
        let $ctrl = this;
        $ctrl.$onInit = function () {
            $scope.id = $scope.$id;
            $scope.user = {
                prefixUsername: `${$rootScope.globals.currentUser.tenant}_`
            };
        };

        $scope.save = (user) => {
            $scope.showLoading = true;

            let _user = angular.copy(user);
            _user.username = _user.prefixUsername + _user.username;

            const onSuccess = () => {
                $scope.showLoading = false;
                $scope.onClose = () => $state.go('tenantUser.userManagement.home');
                $element.append($compile(`
                    <alert type="success" title="Add new user has been success." on-close="onClose()"></alert>
                `)($scope));
            };
            TenantUserService.createInternalUser(_user.password, _user.username, _user.email)
                .then(onSuccess)
                .catch(onSuccess);
        };
    }
})();