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

	$scope.newProject = function(){
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: '/templates/popups/new-project.html',
			controller: 'NewProjectController',
			size: 'lg',
			resolve: {
				items: function () {
				  return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.log('Modal dismissed at: ' + new Date());
		});
	}	
}]);

