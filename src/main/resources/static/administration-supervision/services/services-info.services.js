/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').factory('ServicesInfoServices', ['$http',
																													   'FormulaireSelectionDomaineEnvironnementServices',
																													   'SecuriteRESTServices',
		function($http, FormulaireSelectionDomaineEnvironnementServices, SecuriteRESTServices) {

			//Interface de la factory de services
			var services = {
                getServiceInfo : getServiceInfo,
                getSwaggerUrl : getSwaggerUrl
			};
            
            function getServiceInfo(serviceName) {
				var env = FormulaireSelectionDomaineEnvironnementServices.getDomaineEnvironnementSelectionne();
                //console.log("env = ", env);
                var baseUrl = env.url + "/" + serviceName + "/actuator/info"
                //console.log("baseUrl = ", baseUrl);                
				var promise =  $http.get(baseUrl, {headers: {}}).success(function(response) {
					return response;
				});
				return promise;
			}
            
            function getSwaggerUrl(serviceName) {
                //console.log("getSwaggerUrl");
				var env = FormulaireSelectionDomaineEnvironnementServices.getDomaineEnvironnementSelectionne();
                return env.url + "/" + serviceName + "/swagger-ui.html"
			}

			return services;
		}
	]);
})();
