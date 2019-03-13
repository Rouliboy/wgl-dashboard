/**
 * Created by ijla5100 on 23/12/2016.
 */
(function() {

	"use strict";

	angular
			.module('ApplicationDashboardWGL')
			.factory(
					'DomainesServices',
					[
							'$http',

							function($http) {

								// Interface de la factory de services
								var services = {
									getDomaines : getDomaines,
									getConfigurationDomainesWeblogic : getConfigurationDomainesWeblogic,
                                    getEnvironnements : getEnvironnements
								};

								function getDomaines() {
									return domaines;
								}
                                
								function getEnvironnements() {
									var envs = {
                                        "envs" : 
                                            [
                                                {
                                                    "name" : "DEV1",
                                                    "url":"https://api-location-esip-dev-2.dev.aws-nexity.fr"
                                                } , 
                                                {
                                                    "name" : "DEV2",
                                                    "url":"https://api-location-esip-dev-2.dev.aws-nexity.fr"
                                                }  , 
                                                {
                                                    "name" : "DEV3",
                                                    "url":"https://api-location-esip-dev-2.dev.aws-nexity.fr"
                                                } 
                                            ]

                                    };
                                    
                                    return envs;
								}

								function getConfigurationDomainesWeblogic() {
                                    console.log("getConfigurationDomainesWeblogic");
									var promise = $http
											.get(
													'resources/envs-configuration.json')
											.success(
													function(data, status,
															headers, config) {
														return data;
													});

									return promise;
								}

								return services;
							} ]);
})();
