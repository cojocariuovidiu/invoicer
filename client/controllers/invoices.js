var myApp = angular.module("myApp");

myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http,
                                                                                                  $location, $routeParams){
  
  $scope.getInvoices = function(){
		$http.get('/api/invoices').success(function(response){
			$scope.invoices = response;
		});
	}
  
  $scope.getCustomers = function(){
		$http.get('/api/customers').success(function(response){
			$scope.customers = response;
		});
	}

	$scope.addInvoice = function(){
		$http.post('/api/invoices/',$scope.invoice).success(function(response){
			window.location.href='/#invoices';
		});
	}

	$scope.updateInvoice = function(){
		$http.put('/api/invoices/'+$scope.invoice._id,$scope.invoice).success(function(response){
			window.location.href='/#invoices';
		});
	}
  
}])