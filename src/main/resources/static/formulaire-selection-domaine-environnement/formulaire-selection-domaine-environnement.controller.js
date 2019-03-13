/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').controller('FormulaireSelectionEnvironnementController', ['FormulaireSelectionDomaineEnvironnementServices',
																																								'DomainesServices',

		function (FormulaireSelectionDomaineEnvironnementServices, DomainesServices) {

			var controller = this;

			initialiser();

			controller.setDomaineEnvironnnementSelectionne = function () {
				FormulaireSelectionDomaineEnvironnementServices.setDomaineEnvironnementSelectionne(controller.selectedEnv);
			}
			
			
			function initialiser() {
                console.log("Init FormulaireSelectionEnvironnementController");
                controller.configurationEnvs = DomainesServices.getEnvironnements();
                controller.selectedEnv = controller.configurationEnvs.envs[0];
                FormulaireSelectionDomaineEnvironnementServices.setDomaineEnvironnementSelectionne(controller.selectedEnv);

                /*DomainesServices.getConfigurationDomainesWeblogic().then(function (response) {
                    controller.configurationEnvs = response.data;
                    console.log("Init controller.configurationEnvs=", controller.configurationEnvs);
                    controller.selectedEnv = controller.configurationEnvs.envs[0];
                    FormulaireSelectionDomaineEnvironnementServices.setDomaineEnvironnementSelectionne(controller.selectedEnv);
                });*/

			}
		}
	]);
})();
