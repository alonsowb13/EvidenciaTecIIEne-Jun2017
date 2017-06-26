var app = angular.module('BookStoreApp', ['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
	templateUrl: 'views/list.html',
	controller: 'BooksController'
      }).
      when('/book/:book_id', {
	templateUrl: 'views/tab.html',
	controller: 'BooksSheetController'
      }).
      otherwise({
	redirectTo: '/home'
      });
}]);
