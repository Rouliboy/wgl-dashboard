/**
 * Created by ijla5100 on 23/12/2016.
 */
(function() {

	"use strict";

	angular.module('ApplicationDashboardWGL').factory('FormulaireSelectionDomaineEnvironnementServices', ['$rootScope', '$http', '$timeout', 'DomainesServices',

		function($rootScope, $http, $timeout, DomainesServices) {

			//Interface de la factory de services
			var services = {
				getDomaineEnvironnementSelectionne : getDomaineEnvironnementSelectionne,
				setDomaineEnvironnementSelectionne : setDomaineEnvironnementSelectionne
			};

			var domaineEnvironnementSelectionne = undefined;

			function setDomaineEnvironnementSelectionne(domaineSelectionne) {
                console.log("domaineSelectionne=", domaineSelectionne);
				domaineEnvironnementSelectionne = domaineSelectionne;
				$rootScope.$broadcast('selectionNouveauDomaineEnvironnement');
			}

			function getDomaineEnvironnementSelectionne() {
				return domaineEnvironnementSelectionne;
			}
            
			return services;
		}
	]);
})();
