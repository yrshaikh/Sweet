var projectDataStoreJs = require('../../datastore/project-data-store');
var accountService = require('../../services/account/account-service.js');
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

ProjectService.prototype.getMembers = function(projectId) {
    return projectDataStore.get(projectId)
        .then(function(projects){
            var userIds = projects[0].users;
            var userIds = underscore.pluck(userIds, 'id');
            return new accountService().getUsersByUserId(userIds);
        })
        .then(function (users) {
            console.log(JSON.stringify(users));
            var u = underscore.pick(users, 'id', 'firstname', 'lastname');
            console.log(JSON.stringify(u));
            return u;
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