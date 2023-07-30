const core = require('@actions/core');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
	try {
		const workshop = {
			name: process.env['workshop_name'],
			date: process.env['workshop_date'],
			host: process.env['workshop_host'].split(','),
			description: process.env['workshop_description'],
		};
		if (process.env['workshop_slides']) {
			workshop.slides = process.env['workshop_slides'];
		}
		if (process.env['workshop_recording']) {
			workshop.recording = process.env['workshop_recording'];
		}
		if (process.env['workshop_code']) {
			workshop.code = process.env['workshop_code'];
		}
		workshop.host = workshop.host.map((s) => s.trim());
		workshop.host = workshop.host.filter((s) => s.trim()); // removes empty strings

		const temp = JSON.parse(fs.readFileSync('./frontend/src/data/workshops.json'));
		temp[process.env['category']].push(workshop);
		fs.writeFileSync('./frontend/src/data/workshops.json', JSON.stringify(temp, null, 2));
	} catch (error) {
		core.setFailed(error.message);
	}
}

run();
