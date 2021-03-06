/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').controller('ServicesController', ['$scope', '$window',
		                                                                                         'ServicesInfoServices',

		function ($scope, $window, ServicesInfoServices) {

			var controller = this;

            var services = [
				"autorisation",
				"biens-immobiliers",
				"commercialisation-bien-a-louer",
				"gestion-mandat-location",
				"tiers",
				"location-organisation",
				"transverse-location",
				"commercialisation-mandats-location",
				"registre-mandats",
				"nomenclatures",
				"referentiel-geographique",
				"gestion-technique-immeubles",
				"transverse",
				"gestion-mandats-gestion-locative",
				"transverse-gerance",
				"gestion-baux",
				"comptabilite-gerance-commun",
				"parametrage-comptabilite",
				"comptabilite-transverse-supervision"
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
                    ServicesInfoServices.getServiceInfo(value).then(function(response) {
                        //console.info("getServiceInfo response = ", response.data);
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
                
				$window.open(ServicesInfoServices.getSwaggerUrl(serviceName));
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
