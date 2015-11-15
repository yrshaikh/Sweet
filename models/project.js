var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    createdDate: { type: Date, required: true }
});

module.exports = mongoose.model('Project', Project);
