var projectDataStoreJs = require('../../datastore/project-data-store');
var underscore = require('underscore');

var projectDataStore = new projectDataStoreJs();
var configs = require('config');

function ProjectService(){}

ProjectService.prototype.createNewProject = function(name, createdByUserId) {
    return projectDataStore.createNewProject(name, createdByUserId);
};

ProjectService.prototype.get = function(userId) {
    return projectDataStore.get(userId)
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