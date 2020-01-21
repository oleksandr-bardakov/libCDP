const nodemailer = require("nodemailer");
const config = require('../config/config.json');
const file = require('./file');
const readFileHTML = require('fs');

async function handleNodeMailer(mailInfo) {
    let transporter = nodemailer.createTransport({
        host: config.mailOptions.host,
        port: config.mailOptions.port,
        secure: config.mailOptions.secure,
        auth: {
            user: config.mailOptions.username,
            pass: config.mailOptions.password,
        },
    });

    transporter.verify((err, success) => {
        if (err) {
            return 'err';
        }
    });

    readFileHTML

    let mailOptions = {
        from: config.mailOptions.fullDefaultEmail,
        to: mailInfo.invitedUsers,
        subject: mailInfo.title,
        html: await file(mailInfo),
        attachments: [
            {
                path: './nodemailer/event.ics',
            },
        ],
    };

    await transporter.sendMail(mailOptions);
}

module.exports = handleNodeMailer;