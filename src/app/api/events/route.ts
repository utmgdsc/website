import ical from 'ical-generator';
import { NextRequest } from 'next/server';
import { getEnrichedEvents, generateChronicleFrontMatter, MIN_DATE, MAX_DATE, concatStrings } from './getEventData';

/**
 * return an ical for the events
 */
export async function GET(req: NextRequest): Promise<Response> {
	if (req.method !== 'GET') {
		return new Response(null, { status: 405 });
	}

	const calendar = ical({
		name: 'GDSC UTM Events',
	});

	calendar.prodId({
		company: 'Google Developer Student Clubs - University of Toronto Mississauga',
		product: 'GDSC UTM Events',
		language: 'EN',
	});

	const { events, eventInfo } = await getEnrichedEvents(undefined, MIN_DATE, MAX_DATE);

	const isDiscord = req.nextUrl.searchParams.get('useFrontMatter') ?? false;

	for (const [index, event] of events.entries()) {
		const info = eventInfo[index];

		// Assert that required properties exist
		if (!info['start_date'] || !info['end_date'] || !info['title']) {
			throw new Error(`Missing required event information for event ID: ${event.id} at index ${index}`);
		}

		calendar.createEvent({
			start: new Date(info['start_date']),
			end: new Date(info['end_date']),
			summary: info['title'],
			description: isDiscord ? generateChronicleFrontMatter(info) : info['description'],
			url: event['url'],
			location: concatStrings(info['venue_name'], info['meetup_url'], info['eventbrite_url']) ?? undefined,
			id: `${info['id']}${isDiscord ? '+frontmatter' : ''}@gdscutm.com`,
		});
	}

	return new Response(calendar.toString(), {
		status: 200,
		headers: {
			'Content-Type': 'text/calendar',
			'Content-Disposition': 'attachment; filename="gdsc-utm-events.ics"',
		},
	});
}
