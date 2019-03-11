/**
 * Created by ijla5100 on 23/12/2016.
 */
(function() {

	"use strict";

	angular.module('ApplicationDashboardWGL').factory('SecuriteRESTServices', ['$rootScope',

		function($rootScope) {

			var imageEtatSecuriteOK = "commun/images/ok.gif";
			var libelleEtatSecuriteOK = "Accès sécurisé";
			var imageEtatSecuriteWarning = "commun/images/warning.gif";
			var libelleEtatSecuriteBloque = "Accès bloqué";
			var infosSecuriteREST = {isRESTSecurise : 'true', imageEtatSecurite : imageEtatSecuriteOK, libelleEtatSecurite : libelleEtatSecuriteOK};

			//Interface de la factory de services
			var services = {
				getAuthorization : getAuthorization,
				getInfosSecuriteREST : getInfosSecuriteREST,
				isRESTSecurise : isRESTSecurise
			};


			function getAuthorization(nomDomaine) {
				var credentials = nomDomaine + ':' + CryptoJS.SHA256(nomDomaine + "_fmo-pn-console-admin");
				var wordArray = CryptoJS.enc.Utf8.parse(credentials);
				var crypto = "UNAUTHORIZED";
				if(infosSecuriteREST.isRESTSecurise) {
					crypto = CryptoJS.enc.Base64.stringify(wordArray)
				}
				var authorization = "Basic " + crypto;
				return authorization;
			}

			function getInfosSecuriteREST() {
				return infosSecuriteREST;
			}
			
			function isRESTSecurise() {
				return infosSecuriteREST.isRESTSecurise;
			}

			return services;
		}
	]);
})();
