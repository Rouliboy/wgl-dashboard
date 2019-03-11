/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').controller('InformationsGeneralesController', ['$scope',
		                                                                                   						    'FormulaireSelectionDomaineEnvironnementServices',
                                                                                                                    'DomainesServices',
																													  							 'InformationsGeneralesServices',
																																				 'SecuriteRESTServices',

		function ($scope, FormulaireSelectionDomaineEnvironnementServices, DomainesServices, InformationsGeneralesServices, SecuriteRESTServices) {

			var controller = this;

			initialiser();

			/**
			 * Capte un événement selectionNouveauDomaineEnvironnement.
			 */
			$scope.$on('selectionNouveauDomaineEnvironnement', function (event) {
				initialiser();
			});

			function initialiser() {
				controller.requettesHttpEnCours = 0;
				controller.erreur = undefined;                
                DomainesServices.getConfigurationDomainesWeblogic().then(function (response) {
                    
                    controller.domaineEnvironnementSelectionne = FormulaireSelectionDomaineEnvironnementServices.getDomaineEnvironnementSelectionne();
                    //getInformationsGenerales(controller.domaineEnvironnementSelectionne);
                    console.log("domaineEnvironnementSelectionne = ", controller.domaineEnvironnementSelectionne);
                });
			}

		}
	]);
})();
