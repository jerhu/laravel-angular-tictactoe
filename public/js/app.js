/*global angular, event, navigator */
(function () {
	'use strict';

	var morpionApp = angular.module('morpionApp', [
		'ngRoute',
		'ngStorage',
		'morpionControllers'
	]);

	morpionApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when('/home', {
					templateUrl: 'partials/home.html',
					controller: 'HomeCtrl'
				}).
				when('/grid', {
					templateUrl: 'partials/grid.html',
					controller: 'GridCtrl'
				}).
				when('/ranking', {
					templateUrl: 'partials/ranking.html',
					controller: 'RankingCtrl'
				}).
				otherwise({
					redirectTo: '/home'
				});
		}]);
}());
