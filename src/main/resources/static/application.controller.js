/**
 * Created by ijla5100 on 23/12/2016.
 */
(function () {
	"use strict";

	angular.module('ApplicationDashboardWGL').controller('ApplicationController', ['$scope',
																															      'SecuriteRESTServices',
																															      'ModeServices',

		function ($scope, SecuriteRESTServices, ModeServices) {

			var controller = this;
            controller.modeSimplifie = true;
            controller.batchAutorise = false;

			/**
			 * Capte un événement selectionNouveauDomaineEnvironnement.
			 */
			$scope.$on('modificationSecuriteREST', function (event) {
				controller.infosSecuriteREST = SecuriteRESTServices.getInfosSecuriteREST();
			});

			initialiser();
            
			function initialiser() {
				controller.infosSecuriteREST = SecuriteRESTServices.getInfosSecuriteREST();
			}
            
            $scope.changeModeSimplifie = function() {
                ModeServices.modifierModeSimplifie(controller.modeSimplifie);
                if (controller.modeSimplifie)
                {
                    controller.batchAutorise = false;
                }
            };
            
            $scope.changeBatchAutorise = function() {
                ModeServices.modifierBatchAutorise(controller.batchAutorise);
            };
            
		}
	]);
})();
