const ics = require('ics');
const { writeFileSync } = require('fs');
const moment = require('moment');

async function generageICSFile(mailInfo) {

    const event = {
        start: [
            moment(mailInfo.time_start).year(),
            moment(mailInfo.time_start).month() + 1,
            moment(mailInfo.time_start).date(),
            moment(mailInfo.time_start).hour(),
            moment(mailInfo.time_start).minute()
        ],
        end: [
            moment(mailInfo.time_end).year(),
            moment(mailInfo.time_end).month() + 1,
            moment(mailInfo.time_end).date(),
            moment(mailInfo.time_end).hour(),
            moment(mailInfo.time_end).minute()
        ],
        title: mailInfo.title,
        status: 'CONFIRMED',
        organizer: { name: mailInfo.name, email: mailInfo.creator },
    };

    ics.createEvent(event, (err, value) => {
        if (err) {
            return err;
        }
        return writeFileSync(`${__dirname}/event.ics`, value);
    })
}

module.exports = generageICSFile;