/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').config(['$routeProvider',
		function($routeProvider) {

		$routeProvider.when('/', {
				controller : 'ServicesController',
				controllerAs : 'servicesCtl',
				templateUrl: 'administration-supervision/services/services-info.html'
			})
		}
	]);
})();
