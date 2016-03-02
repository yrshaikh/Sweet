var express = require('express');
var Project = require('../models/project');
var router = express.Router();
var projectServiceJs = require('../services/project/project-service');
var projectService = new projectServiceJs();
var promise = require('bluebird');

// /project/create?name={{projectName}}
router.post('/create', function (req, res) {
    var projectName = req.body.name;
    var createdByUserId = req.user.id;
    projectService.createNewProject(projectName, createdByUserId)
        .then(function(createdProject){
            res.status(200).send(createdProject);
        })
        .catch(function(err){
            res.status(200).send(err);
        });
});

router.get('/get', function(req, res){
    var userId = req.user.id;
    projectService.getByUserId(userId)
        .then(function(projects){
            res.status(200).send(projects);
        })
        .catch(function(err){
            res.status(200).send(err);
        });
});

router.get('/getprojectsummary/:id', function(req, res){
    var projectId = req.params.id;
    projectService.getSummary(projectId)
        .then(function(projects){
            res.status(200).send(projects);
        })
        .catch(function(err){
            res.status(200).send(err);
        });
});

router.get('/getprojectmembers/:id', function(req, res){
    var projectId = req.params.id;
    projectService.getMembers(projectId)
        .then(function(members){
            console.log(JSON.stringify(members));
            res.status(200).send(members);
        })
        .catch(function(err){
            res.status(200).send(err);
        });
});

module.exports = router;