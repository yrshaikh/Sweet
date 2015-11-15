/**
 * Created by yasser.s on 11/13/2015.
 */
var Promise = require('bluebird');
var Project = require('../models/project');
var uuid = require('node-uuid');

function ProjectDataStore() {
}

Promise.promisifyAll(Project);
Promise.promisifyAll(Project.prototype);

ProjectDataStore.prototype.createNewProject = function(name){
	var newProject = Project({
        id: uuid.v1(),
        name: name,
        createdDate: new Date()
	});

    return newProject.saveAsync();
}

module.exports = ProjectDataStore;
