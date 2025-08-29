import { getData, parseWorkshops } from './getWorkshopData';

export async function GET() {
	let parsedWorkshops;

	try {
		parsedWorkshops = parseWorkshops(await getData());
	} catch (error) {
		return new Response(String(error), {
			status: 500,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			},
		});
	}

	return new Response(JSON.stringify(parsedWorkshops, null, 2), {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		},
	});
}
