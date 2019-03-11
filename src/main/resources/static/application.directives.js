/**
 * Created by ijla5100 on 23/12/2016.
 */
(function() {
	'use strict';

	angular.module('ApplicationDashboardWGL').directive("administrationSupervision",
		function() {
			return {
				controller : "AdministrationSupervisionController",
				controllerAs : "administrationSupervisionCtl",
				restrict: 'E',
				templateUrl: 'administration-supervision/administration-supervision.html'
			};
		}
	);
        
	angular.module('ApplicationDashboardWGL').directive("formulaireSelectionEnvironnement",
		function() {
			return {
				restrict: 'E',
				controller : 'FormulaireSelectionEnvironnementController',
				controllerAs : 'formulaireSelectionEnvironnementCtl',
				templateUrl: 'formulaire-selection-domaine-environnement/formulaire-selection-domaine-environnement.html'
			};
		}
	);

	angular.module('ApplicationDashboardWGL').directive("informationsGenerales",
		function() {
			return {
				restrict: 'E',
				controller : 'InformationsGeneralesController',
				controllerAs : 'informationsGeneralesCtl',
				templateUrl: 'informations-generales/informations-generales.html'
			};
		}
	);
})();


