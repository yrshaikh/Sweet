/**
 * Created by yasser.s on 11/15/2015.
 */

angular.module("project-management").factory('ProjectService', ['$http', function ($http) {
    return {
        createNewProject: function(name) {
            var project = {name: name};
            return $http({
                url: '/projects/create',
                method: 'POST',
                data: project
            });
        }
    };
}]);