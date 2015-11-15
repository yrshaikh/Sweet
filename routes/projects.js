var express = require('express');
var Project = require('../models/project');
var router = express.Router();
var projectServiceJs = require('../services/project/project-service');
var projectService = new projectServiceJs();
var promise = require('bluebird');

router.get('/ping', function (req, res) {
    var name = "first project";
    projectService.createNewProject(name)
        .then(function(){
            console.log("project created");
        })
        .catch(function(err){
            console.log("error occureed", err);
        });

    res.status(200).send("pongg!");
});

module.exports = router;