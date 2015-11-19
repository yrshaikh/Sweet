angular.module('project-management').controller('ProjectIssuesController',
	['$scope', '$http', '$modal', 'ProjectService', '$stateParams', function ($scope, $http, $modal, projectService, $stateParams) {

	$scope.init = function(){
		$scope.projectId = $stateParams.id;
		$scope.currentPage = "issues";
	}

	$scope.newItem = function(){
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: '/templates/popups/new-issue.html',
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

