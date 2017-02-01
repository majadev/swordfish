var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {  // if we go to '/'
        controller: 'BooksController', // we gonna use this controller
        templateUrl: 'views/books.html'// we gonna show this view
    })
    .when('/register', {
            controller: 'BooksController',
            templateUrl: 'views/register.html'
        })
         .when('/login', {
            controller: 'BooksController',
            templateUrl: 'views/login.html'
        })
        .when('/books', {
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books/details/:id', {
            controller: 'BooksController',
            templateUrl: 'views/book_details.html'
        })
    
         .when('/books/add', {
            controller: 'BooksController',
            templateUrl: 'views/add_book.html'
        })
         .when('/books/edit/:id', {
            controller: 'BooksController',
            templateUrl: 'views/edit_book.html'
        })
        .otherwise({
        redirectTo: '/login'
        })
});