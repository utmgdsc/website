const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
    try {
        const workshop = {
            category: core.getInput('category'),
            name: core.getInput('workshop_name'),
            date: core.getInput('workshop_date'),
            host: core.getInput('workshop_host'),
            description: core.getInput('workshop_description'),
            slides: core.getInput('workshop_slides'),
            recording: core.getInput('workshop_recording'),
            code: core.getInput('workshop_code'),
        };

        core.debug(workshop); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
        core.info(workshop);


        core.setOutput('workshop', workshop);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
