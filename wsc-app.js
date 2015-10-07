/*angular.module('calcController', ['ngMessages', 'ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html', 
			controller: 'HomeCtrl'
		}).when('/newmeal', {
			templateUrl: 'newmeal.html', 
			controller: 'newMealCtrl'
		}).when('/earnings', {
			templateUrl: 'earnings.html', 
			controller: 'earningsCtrl'
		}).
	}])
	.controller('HomeCtrl', ['$rootScope', function($rootScope){

	}])

	.controller('earningsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
		$scope.staff = $rootScope.staff || 0;

		$scope.init = function(){
			$scope.staff.meals = 0;
			$scope.staff.tips = 0;
			$scope.staff.avg = 0;

			$rootScope.staff = {
				meals: 0,
				tips: 0,
				avg: 0
			};
		}
	}])
	.controller('newMealCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams)]){
		$scope.customer = $scope.customer || {};
		$rootScope.staff = $rootScope.staff || {
			meals: 0,
			tips: 0,
			avg: 0
		};

		$scope.compute = function(){
			
		}
	}*/