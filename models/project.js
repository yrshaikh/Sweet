var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectUser = require('../models/project-user');

var Project = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    createdDate: { type: Date, required: true },
    createdBy: { type: String, required: true },
    users: [{
        id: { type: String, required: true},
        role: { type: String, required: false}
    }]
});

module.exports = mongoose.model('Project', Project);
