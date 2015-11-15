var projectDataStoreJs = require('../../datastore/project-data-store');

var projectDataStore = new projectDataStoreJs();
var configs = require('config');

function ProjectService(){}

ProjectService.prototype.createNewProject = function(name) {
    return projectDataStore.createNewProject(name)
            .then(function(project){
                return project;
            });
};

module.exports = ProjectService;