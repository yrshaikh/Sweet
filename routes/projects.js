var express = require('express');
var Project = require('../models/project');
var router = express.Router();
var projectServiceJs = require('../services/project/project-service');
var projectService = new projectServiceJs();
var promise = require('bluebird');

// /project/create?name={{projectName}}
router.post('/create', function (req, res) {
    var projectName = req.body.name;
    projectService.createNewProject(projectName)
        .then(function(createdProject){
            res.status(200).send(createdProject);
        })
        .catch(function(err){
            res.status(200).send(err);
        });
});

module.exports = router;