/**
 * Created by ijla5100 on 23/12/2016.
 */
(function() {

	"use strict";

	angular.module('ApplicationDashboardWGL').factory('ModeServices', ['$rootScope',

		function($rootScope) {

			var isModeSimplifie = true;
            var isBatchAutorise = false;

			//Interface de la factory de services
			var services = {
				modifierModeSimplifie : modifierModeSimplifie,
				getModeSimplifie : getModeSimplifie,
                modifierBatchAutorise : modifierBatchAutorise,
				getBatchAutorise : getBatchAutorise
			};

			function modifierModeSimplifie(modeSimplifie) {
                isModeSimplifie = modeSimplifie;
				$rootScope.$broadcast('modifierModeSimplifie');
                
                // Mise à jour du Batch (non autorisé en simplifié).
                if (isModeSimplifie)
                {
                    modifierBatchAutorise(false);
                }
			}
            
            function getModeSimplifie(){
                return isModeSimplifie;
            }
            
			function modifierBatchAutorise(batchAutorise) {
                isBatchAutorise = batchAutorise;
				$rootScope.$broadcast('modifierBatchAutorise');
			}
            
            function getBatchAutorise(){
                return isBatchAutorise;
            }

			return services;
		}
	]);
})();
