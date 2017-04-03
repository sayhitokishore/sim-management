(function () {
    'use strict';

    angular
        .module('oasisSimAppApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
