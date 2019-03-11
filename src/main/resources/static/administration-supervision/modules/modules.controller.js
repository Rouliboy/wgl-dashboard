/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').controller('ModulesController', ['$scope', '$window',
		                                                                                         'ModulesServices',

		function ($scope, $window, ModulesServices) {

			var controller = this;

            var services = [
                "autorisation", 
                "tiers", 
                "location-organisation", 
                "commercialisation-bien-a-louer", 
                "gestion-mandat-location", 
                "biens-immobiliers",
                "comptabilite-gerance-commun"
            ];
            
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
				getServicesInfo();
			}
            
			function getServicesInfo() {
                
				controller.servicesInfos = [];
                controller.servicesInfosTmp = [];
                
                angular.forEach(services, function(value, key) {
                    controller.requettesHttpEnCours++;
                    ModulesServices.getServiceInfo(value).then(function(response) {
                        console.info("getServiceInfo response = ", response.data);
                        var service = response.data;
                        service.name=value;
                        service.statut = "UP";
                        controller.servicesInfos.push(response.data)
                        controller.requettesHttpEnCours--;
                    }, function (error) {
                        console.log("Error:", error);
                        //controller.erreur = {libelle : "Erreur lors de la récupération des infos de services", detail : error.status + " : " + error.data, detailChecked : false};
                        controller.requettesHttpEnCours--;
                        var serviceInfo = {"name" : value, "statut" : "DOWN"}
                        controller.servicesInfos.push(serviceInfo)
                    });
                });

			}
            
			$scope.getSwaggerUrl = function(serviceName) {
                
				$window.open(ModulesServices.getSwaggerUrl(serviceName));
			}
            
			$scope.convertUTCDate= function(inputDate) {
                var convertedDate=undefined;
                if (inputDate) {
                    convertedDate = inputDate.substring(8,10)+'/'+inputDate.substring(5,7)+'/'+inputDate.substring(0,4) + "  " + inputDate.substring(11,16);
                }
				return convertedDate;
			}
		}
	]);
})();
