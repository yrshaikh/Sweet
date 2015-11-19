angular.module('project-management').controller('ProjectController',
	['$scope', '$http', '$modal', 'ProjectService', '$stateParams', function ($scope, $http, $modal, projectService, $stateParams) {

	$scope.init = function(){
		var projectId = $stateParams.id;

		$scope.project = {
			loading: false,
			data: []
		}

		getProjectDetails(projectId);
	}

	var getProjectDetails = function(projectId){
		projectService.getProjectDetails(projectId)
			.then(function(response){
				$scope.project.loading = false;
				$scope.project.data = response.data;
			});
	};
}]);

