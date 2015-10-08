angular.module('WSCApp', ['ngRoute', 'ngAnimate', 'ngMessages'])
	.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html' 
		}).when('/new-meal', {
			templateUrl: 'newmeal.html', 
			controller: 'newmealCtrl'
		}).when('/earnings', {
			templateUrl: 'earnings.html', 
			controller: 'earningsCtrl'
		}).otherwise({
			redirectTo: '/'
		});
	})
	.controller('newmealCtrl', function($scope, $rootScope){
		$rootScope.earnings = $rootScope.earnings || { // save values
			meals: 0,
			tips: 0,
			avgTips: 0
		};

		$scope.submit = function(){
			if ($scope.mealForm.$valid) {
				$scope.errorShow = false;
				$scope.subTotal = $scope.mealPrice * $scope.taxRate/100 + $scope.mealPrice;
				$scope.tip = $scope.mealPrice * $scope.tipPer/100;
				$scope.total = $scope.subTotal + $scope.tip;
				$rootScope.earnings.meals++;
				$rootScope.earnings.tips += $scope.tip;
				$rootScope.earnings.avgTips = $rootScope.earnings.tips / $rootScope.earnings.meals;
			}
			else {
				$scope.errorShow = true;
			}
		};

		$scope.cancel = function(){
			delete $scope.mealPrice;
			delete $scope.taxRate;
			delete $scope.tipPer;
			delete $scope.subTotal;
			delete $scope.tip;
			delete $scope.total;
			$rootScope.earnings = {
				meals: 0, 
				tips: 0, 
				avgTips: 0
			};
			$scope.errorShow = false;
		};
	})
	.controller('earningsCtrl', function($scope, $rootScope){
		$scope.reset = function(){
			$rootScope.earnings = {
				meals: 0,
				tips: 0,
				avgTips: 0
			}
		};		
	});