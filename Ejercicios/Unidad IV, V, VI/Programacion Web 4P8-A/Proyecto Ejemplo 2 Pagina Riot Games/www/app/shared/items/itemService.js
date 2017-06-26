/**
 * Created by usuario1 on 4/14/2017.
 */
(function () {
    'use strict';

    angular
        .module('main')
        .service('ItemService',ItemService);

    ItemService.$inject = ['$resource','ServerInfo'];
    function ItemService($resource,ServerInfo) {
        return $resource(ServerInfo.getBaseUrl() + '/api/item/:id',{id: "@id"});
    }
})();