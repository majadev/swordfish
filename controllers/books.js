var myApp = angular.module('myApp');

// parameter list
// bookcontroller(name aof the controller), 
//$scope, binds the controller to the view 
//$http allow us to do get request and post request to our api
//$location deals with redirection 
//$routeParams allow us to get values from forms, and get variabels


myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

//scopefunction to get the books, to get our  data to our view
	$scope.getBooks = function(){
		$http.get('/api/books').then(function(response){
			$scope.books = response.data;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/book/'+ id).then(function(response){
			$scope.book = response.data;
		});
	}
	$scope.login = function(){
		$http.get('/login').then(function(response){
			$scope.login = response.data;
		});
	}
	$scope.register = function(){
		$http.get('/register').then(function(response){
			$scope.register = response.data;
		});
	}

	$scope.addBook = function(){
		var id = $routeParams.id;
		$http.post('/api/books', $scope.book).then(function(response){
			window.location.href='#!/books';
		});
	}
	//$http.post('/someUrl', data, config).then(successCallback, errorCallback);

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+ id, $scope.book).then(function(response){
			window.location.href='#!/books/details/' + id;
		});
	}
	
	$scope.removeBook = function(id){
			console.log(id)
		$http.delete('/api/book/' +id).then(function(response){
                    window.location.href='#/books';
			});
		}

}])

 /*<script>
            var example = angular.module("example", ["ngStorage"]);
            example.controller("ExampleController", function($scope, $localStorage) {
 
                $scope.save = function() {
                    $localStorage.message = "Hello World";
                }
 
                $scope.load = function() {
                    $scope.data = $localStorage.message;
                }
 
            });
        </script>*/