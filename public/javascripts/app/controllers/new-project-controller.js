angular.module('project-management').controller('NewProjectController',
 ['$scope', '$modalInstance', 'ProjectService', function ($scope, $modalInstance, projectService) {
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
        saveFailure: false,
        saveFailureDuplicate: false
      };
    }
    $scope.saveProject = function(){
      $scope.project.saving = true;
      $scope.project.saveFailure = false;
      $scope.project.saveFailureDuplicate = false;
      projectService.createNewProject($scope.project.name)
          .success(function(response){
              $scope.project.saving = false;
              if(response.errmsg && response.errmsg.indexOf('duplicate') != -1)
                $scope.project.saveFailureDuplicate = true;
              alert("popup close");
          })
          .error(function(){
              $scope.project.saving = false;
              $scope.project.saveFailure = true;
          });
    }
}]);