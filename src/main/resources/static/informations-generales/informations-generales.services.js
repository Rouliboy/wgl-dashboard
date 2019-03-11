/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').factory('InformationsGeneralesServices', ['$http',
																																	     'SecuriteRESTServices',

		function($http, SecuriteRESTServices) {

			//Interface de la factory de services
			var services = {
				getInformationsGenerales : getInformationsGenerales
			};

			function getInformationsGenerales(domaine) {
				var urlRessource = domaine.manages[0].url + "/sldng/admin/general/information";
				var authorization = SecuriteRESTServices.getAuthorization(domaine.nom);
				var promise =  $http.get(urlRessource, {headers: {'REST-Authorization': authorization}}).success(function(response) {
					return response;
				});
				return promise;
			}

			return services;
		}
	]);
})();
