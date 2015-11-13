angular.module('project-management').controller('DashboardController', 
	['$scope', '$http', '$modal', function ($scope, $http, $modal) {
	
	$scope.init = function(){		
	}

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

