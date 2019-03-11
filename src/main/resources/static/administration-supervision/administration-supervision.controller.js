/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').controller('AdministrationSupervisionController', ['$location','$scope',

		function ($location,$scope) {
			var controller = this;
            
			/**
			 * Permet de rendre actif l'onglet de la navbar en fonction de la page où l'on se trouve
			 * @param tab
			 * @returns true si tab est actif
			 */
			controller.isActive = function (tab) {
				if(tab === 'Modules') {
					return $location.url().endsWith('/');
				} else {
					return $location.url().endsWith(tab);
				}
			}
            
            controller.isAffiche = function (tab) {
                return true;
            }
		}
	]);
})();
