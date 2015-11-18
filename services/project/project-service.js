var projectDataStoreJs = require('../../datastore/project-data-store');
var underscore = require('underscore');

var projectDataStore = new projectDataStoreJs();
var configs = require('config');

function ProjectService(){}

ProjectService.prototype.createNewProject = function(name, createdByUserId) {
    return projectDataStore.createNewProject(name, createdByUserId);
};

ProjectService.prototype.getSummary = function(projectId) {
    return projectDataStore.get(projectId)
        .then(function(projects){
            var response = {
                id: projects[0].id,
                name: projects[0].name,
                createdDate: projects[0].createdDate
            }
            return response;
        });
};

ProjectService.prototype.getByUserId = function(userId) {
    return projectDataStore.getByUserId(userId)
            .then(function(projects){
                var response = [];
                underscore.forEach(projects, function(project){
                    var p = {
                        id: project.id,
                        name: project.name,
                        createdDate: project.createdDate
                    }
                    response.push(p);
                });
                return response;
            });
};

module.exports = ProjectService;