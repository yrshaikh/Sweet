var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectUser = new Schema({
    id: { type: String, required: true},
    role: { type: String, required: false}
});

module.exports = mongoose.model('ProjectUser', ProjectUser);
