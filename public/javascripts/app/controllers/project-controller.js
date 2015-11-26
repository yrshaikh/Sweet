angular.module('project-management').controller('ProjectController',
	['$scope', '$http', '$modal', 'ProjectService', '$rootScope', function ($scope, $http, $modal, projectService, $rootScope) {

	$scope.init = function(){
		$scope.project = {
			loading: false,
			data: []
		};
		$rootScope.$on('project:tab:change', function (event, data) {
			getProjectDetails(data.id);
			$scope.data = data;
			$scope.currentPage = data.title;
		});
	}

	var getProjectDetails = function(projectId){
		projectService.getProjectDetails(projectId)
			.then(function(response){
				$scope.project.loading = false;
				$scope.project.data = response.data;
			});
	};
}]);

