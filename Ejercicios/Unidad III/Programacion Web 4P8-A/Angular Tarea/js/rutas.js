(function () {
    'use strict';

    angular
        .module('miApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: 'home.html',
                controller: 'MovieController as $ctrl',
                resolve:{
                    movie:['PeliculasDetalle',function (PeliculasDetalle) {
                        return PeliculasDetalle.getAllBooks();
                    }]
                }
            })
            .state('tab', {
                url:'/tab/{id}',
                templateUrl: 'trailer.html',
                controller: 'TabController as $ctrl',
                resolve:{ 
                    movie:['$stateParams','PeliculasDetalle',function ($stateParams,PeliculasDetalle) {
                        return PeliculasDetalle.getOneBook($stateParams.id);
                    }]
                }
            })
    }




})();