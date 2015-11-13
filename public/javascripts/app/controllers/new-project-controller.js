angular.module('project-management').controller('NewProjectController',
 ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close($scope.selected);
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.init = function(){
      $scope.project = {
        name: '',
        saving: false,
        saveSuccess: false,
        saveFailure: false
      };
    }
    $scope.saveProject = function(){
      $scope.project.saving = true;
    }
}]);