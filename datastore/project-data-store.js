/**
 * Created by yasser.s on 11/13/2015.
 */
var Promise = require('bluebird');
var Project = require('../models/project');
var ProjectUser = require('../models/project-user');
var uuid = require('node-uuid');

function ProjectDataStore() {
}

Promise.promisifyAll(Project);
Promise.promisifyAll(Project.prototype);

ProjectDataStore.prototype.createNewProject = function(name, createdByUserId){
    var projectUser = {
        id: createdByUserId,
        role: 'owner' // todo: move this string 'owner' to an enum somewhere.
    };
	var newProject = Project({
        id: uuid.v1(),
        name: name,
        createdDate: new Date(),
        createdBy: createdByUserId,
        users: [projectUser]
	});
    return newProject.saveAsync();
}

module.exports = ProjectDataStore;
