/*global angular, event, navigator, console */
/*jslint bitwise: true */
(function () {
	'use strict';

	var morpionControllers = angular.module('morpionControllers', []);

	morpionControllers.controller('HomeCtrl', ['$scope', '$location', 'morpion',
		function ($scope, $location, morpion) {
			$scope.morpion = morpion;
			$scope.proceed = function () {
				$scope.morpion.setPlayers([$scope.p1_nickname, $scope.p2_nickname]);
				$location.path('/grid');
			};
		}]);

	morpionControllers.controller('GridCtrl', ['$scope', 'morpion',
		function ($scope, morpion) {
			$scope.morpion = morpion;
		}]);

	morpionControllers.controller('RankingCtrl', ['$scope', function ($scope) {
		$scope.ranking = [
			{nickname: 'John', wins: 22, losses:  0, draws: 2, last: '2005-01-23 05:23'},
			{nickname: 'Paul', wins: 10, losses:  2, draws: 5, last: '2004-04-23 12:45'},
			{nickname: 'Ringo', wins: 2, losses: 10, draws: 0, last: '1967-01-23 05:23'}
		];
	}]);
}());