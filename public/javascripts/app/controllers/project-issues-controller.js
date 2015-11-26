angular.module('project-management').controller('ProjectIssuesController',
	['$scope', '$http', '$modal', 'ProjectService', '$stateParams','$rootScope', function ($scope, $http, $modal, projectService, $stateParams, $rootScope) {

	$scope.init = function(){
		$scope.projectId = $stateParams.id;
		$rootScope.$broadcast('project:tab:change',
			{
				id: $scope.projectId,
				title: 'issues'
			}
		);
	}

	$scope.newItem = function(){
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: '/templates/popups/new-issue.html',
			controller: 'NewIssueController',
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

