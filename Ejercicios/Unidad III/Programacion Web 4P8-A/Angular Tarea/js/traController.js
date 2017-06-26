(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('TabController',TabController);

    TabController.$inject = ['movie'];
    function TabController(movie) {
        var $ctrl = this;
        $ctrl.movie = movie;
}
})();