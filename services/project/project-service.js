var projectDataStoreJs = require('../../datastore/project-data-store');

var projectDataStore = new projectDataStoreJs();
var configs = require('config');

function ProjectService(){}

ProjectService.prototype.createNewProject = function(name, createdByUserId) {
    return projectDataStore.createNewProject(name, createdByUserId)
            .then(function(project){
                return project;
            });
};

module.exports = ProjectService;