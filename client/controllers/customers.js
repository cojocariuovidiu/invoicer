var myApp = angular.module("myApp");

myApp.controller("CustomersController", ['$scope', '$http','$location','$routeParams', function(
                                         $scope, $http, $location, $routeParams){
  
  $scope.getCustomers = function(){
		$http.get('/api/customers').success(function(response){
			$scope.customers = response;
		});
	}
  
  $scope.addCustomer = function(){
		$http.post('/api/customers/',$scope.customer).success(function(response){
			window.location.href='/#customers';
		});
	}

	$scope.updateCustomer = function(){
		$http.put('/api/customers/'+$scope.customer._id,$scope.customer).success(function(response){
			window.location.href='/#customers';
		});
	}
}])