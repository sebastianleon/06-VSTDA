(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = [];

    /* @ngInject */
    function mainController() {
        var vm = this;
        vm.title = 'mainController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();