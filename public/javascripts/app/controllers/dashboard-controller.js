angular.module('project-management').controller('DashboardController', 
	['$scope', '$http', '$modal', 'ProjectService', function ($scope, $http, $modal, projectService) {
	
	$scope.init = function(){
		$scope.projects = {
			data: [],
			loading: false
		}

		loadProjects();
	}

	var loadProjects = function(){
        $scope.projects.loading = true;
		projectService.getProjects()
			.then(function(response){
                $scope.projects.loading = false;
				$scope.projects.data = response.data;
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

