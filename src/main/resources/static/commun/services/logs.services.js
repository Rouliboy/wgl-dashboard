/**
 * Created by ijla5100 on 23/12/2016.
 */
(function() {

	"use strict";

	angular.module('ApplicationDashboardWGL').factory('LogsServices', [

		function() {

			//Interface de la factory de services
			var services = {
				getNiveauxLog : getNiveauxLog
			};

			//TODO JLA probleme MAJUSCULE
			function getNiveauxLog() {
				return [
					{value: 'trace', text: 'trace'},
					{value: 'debug', text: 'debug', default:true},
					{value: 'info', text: 'info'},
					{value: 'warning', text: 'warning'},
					{value: 'error', text: 'error'},
					{value: 'fatal', text: 'fatal'}
				];
			}

			return services;
		}
	]);
})();
