var emailServiceJs = require('../email/email-service');
var accountDataStoreJs = require('../../datastore/account-data-store');

var emailService = new emailServiceJs();
var accountDataStore = new accountDataStoreJs();
var configs = require('config');

function AccountService(){}

AccountService.prototype.sendForgotPasswordMail = function(email, host) {

    return accountDataStore.getByUsername(email)
            .then(function(account){
                if(account){
                    var html = "Hello,<br/><br/>" +
                        "We recently received a request to reset your password. If you did not request this reset, no action is required.<br/><br/>" +
                        "To complete the process please click on the link: " +
                        "<a target='_blank' href='http://" + host + "'>" + "http://" + host + "</a><br/><br/>" +
                        "Thank you for using One Ninja!<br/>" +
                        "The One Ninja Team";

                    var mailSettings = configs.get('mailSettings');
                    var mailContext = {
                        email: email,
                        subject: mailSettings.mailSubjects.forgotPassword,
                        html: html
                    };
                    emailService.sendMail(mailContext)
                        .then(function(){
                            var mailSentPromise = new Promise(function(resolve, reject) {
                                resolve(email);
                            });
                            return mailSentPromise;
                        });
                }
                var emailNotFoundPromise = new Promise(function(resolve, reject) {
                    resolve(null);
                });
                return  emailNotFoundPromise;
            });
};

AccountService.prototype.getUsersByUserId = function(userIds) {
    return accountDataStore.getByUserIds(userIds)
        .then(function(users){
            return users;
        });
};

module.exports = AccountService;