var promise = require('bluebird');
//var nodemailer = require('nodemailer');
var configs = require('config');

function EmailService(){	 
}

EmailService.prototype.sendMail = function(mailContext) {
    var mailSettings = configs.get('mailSettings');
    var smtpTransportOpts = {
        service: mailSettings.service,
        auth: {
            user: mailSettings.user,
            pass: mailSettings.pass
        }
    };
    var mailOptions = {
    	from: mailSettings.from,
    	to: mailContext.email,
    	subject: mailContext.subject,
    	html: mailContext.html
    };

    //var transport = nodemailer.createTransport(smtpTransportOpts);
    //var sendMail = promise.promisify(transport.sendMail, transport)

    //return sendMail(mailOptions);
    console.log("not implemented mailer");
};

module.exports = EmailService;