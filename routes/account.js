var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var uuid = require('node-uuid');
var staticFunctionsJs = require('../utils/staticFunctions');
var staticFunctions = new staticFunctionsJs();
var accountServiceJs = require('../services/account/account-service');
var accountService = new accountServiceJs();
var promise = require('bluebird');

router.get('/', staticFunctions.isAuthenticated, function (req, res) {
    res.render('home', { user : req.user });
});

router.get('/register', function (req, res) {
    res.render('account/register', {});
});

router.post('/register', function (req, res) {
    Account.register(new Account(
        {
            id: uuid.v1(),
            username : req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        }), req.body.password, function (err, account) {
        if (err) {
            account.error = true;
            return res.render('account/register', { account : account });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/sign-in', function (req, res) {
    res.render('account/sign-in', { user : req.user });
});

router.post('/sign-in', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.get('/sign-out', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/forgot-password', function (req, res) {
    res.render('account/forgot-password', { user : req.user });
});

router.post('/forgot-password', function (req, res) {
    var result = { msg: '' };
    accountService.sendForgotPasswordMail(req.body.e, req.header('host'))
        .then(function(emailSentTo){
            if(emailSentTo)
                result.msg = 'sent';
            else
                result.msg = 'not-found';
            res.json(result);
        })
        .catch(function(){
            result.msg = 'error';
            res.json(result);
        });
});

router.get('/ping', function (req, res) {
    res.status(200).send("pong!");
});

module.exports = router;