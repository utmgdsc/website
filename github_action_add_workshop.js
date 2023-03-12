const core = require('@actions/core');
const fs = require('fs')

// most @actions toolkit packages have async methods
async function run() {
    try {
        const workshop = {
            name: process.env['workshop_name'],
            date: process.env['workshop_date'],
            host: JSON.parse(process.env['workshop_host']),
            description: process.env['workshop_description'],
            slides: process.env['workshop_slides'],
            recording: process.env['workshop_recording'],
            code: process.env['workshop_code'],
        };
        const temp = JSON.parse(fs.readFileSync('./frontend/src/data/workshops.json'))
        temp[process.env['category']].push(workshop)
        fs.writeFileSync('./frontend/src/data/workshops.json', JSON.stringify(temp, null, 2))

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
