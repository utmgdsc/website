const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
    try {
        const workshop = {
            category: process.env['category'],
            name: process.env['workshop_name'],
            date: process.env['workshop_date'],
            host: process.env['workshop_host'],
            description: process.env['workshop_description'],
            slides: process.env['workshop_slides'],
            recording: process.env['workshop_recording'],
            code: process.env['workshop_code'],
        };

        core.debug(workshop); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
        core.info(JSON.stringify(workshop));


        core.setOutput('workshop', workshop);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
