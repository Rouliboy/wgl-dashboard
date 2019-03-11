(function() {

	angular.module('ApplicationDashboardWGL').directive("animationLoading",
		     function() {
			    return {
			    	restrict: 'E',
			    	scope: {
			    	      texte: "@texte"
			    	},
			    	templateUrl: 'commun/templates/animation-loading/animation-loading.html'
			    };
			 }
	);

	angular.module('ApplicationDashboardWGL').directive("erreurPersonnalisee",
		function() {
			return {
				restrict: 'E',
				scope: {
					erreur : '=ngModel',
				},
				templateUrl: 'commun/templates/erreur/erreur.html'
			};
		}
	);

	angular.module('ApplicationDashboardWGL').directive("filtreForm",
			function() {
	    		return {
	    			restrict: 'E',
	    			scope: {
	    				parametreFiltre: '=ngModel',
	    				texte : '@texte'
			    	},
	    			templateUrl: 'commun/templates/filtre/filtre-form.html'
	    		};
	 		}
	);
})();
