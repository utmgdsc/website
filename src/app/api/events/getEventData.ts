import { NodeHtmlMarkdown } from 'node-html-markdown';

/**
 * Minimum date allowed by JavaScript Date object.
 * @see https://262.ecma-international.org/5.1/#sec-15.9.1.1
 */
export const MIN_DATE: Date = new Date(-8640000000000000);

/**
 * Maximum date allowed by JavaScript Date object.
 * @see https://262.ecma-international.org/5.1/#sec-15.9.1.1
 */
export const MAX_DATE: Date = new Date(8640000000000000);

/**
 * load external json file from api
 * @param limit the number of events to show
 * @param from the date to start showing events from (inclusive), based on end_date
 * @param to the date to stop showing events at (non-inclusive), based on end_date
 * @returns bevy chapter object
 */
// TODO
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getEvents = async (limit: number | undefined, from: Date, to: Date): Promise<any> => {
	if (!process.env.CHAPTER_API_URL) {
		throw new Error('CHAPTER_API_URL is not defined in the environment variables.');
	}

	return await fetch(process.env.CHAPTER_API_URL, {
		next: { revalidate: 3600 }, // revalidate once an hour
	})
		.then(response => response.json())
		.then(data => {
			if (data['detail'] && (data['detail'].includes('throttled') || data['detail'].includes('error'))) {
				throw new Error(data['detail']);
			}
			// filter only published events
			let eventData = data['results'].filter(event => event['status'] === 'Published');

			// slice to limit if specified
			if (limit) {
				eventData = eventData.slice(0, limit);
			}

			// filter only upcoming events if specified
			eventData = eventData.filter(event => {
				const endDate = new Date(event['end_date']);
				return endDate >= from && endDate < to;
			});

			return eventData;
		})
		.catch(error => {
			return error;
		});
};

/**
 * load external json file from api
 * @param id of the event
 * @returns bevy event object
 */
// TODO
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchEventInfo = async (id: number): Promise<any> => {
	if (!process.env.EVENT_API_URL) {
		throw new Error('EVENT_API_URL is not defined in the environment variables.');
	}

	return await fetch(process.env.EVENT_API_URL + id, {
		next: { revalidate: 604800 }, // revalidate once a week
	})
		.then(response => response.json())
		.then(data => {
			if (!data['description_short']) {
				return data['message'];
			}

			return data;
		})
		.catch(error => {
			return error?.message;
		});
};

export const concatStrings = (...strings: string[]) => strings.filter(Boolean).join(' ');

/**
 * get descriptions and locations for events from api
 */
export const getEnrichedEvents = async (limit: number | undefined, from: Date, to: Date) => {
	const events = await getEvents(limit, from, to);

	const eventInfo = await Promise.all(
		events.map(async event => {
			return await fetchEventInfo(event['id']);
		})
	);

	const descriptions = eventInfo.map(event => {
		if (event['message']) {
			return event['message'];
		}

		return event['description_short'];
	});

	return { events, descriptions, eventInfo };
};

/**
 * Gets a list of years that have events.
 *
 * @returns {Array} array of years
 */
export const getYears = async (): Promise<number[]> => {
	const events = await getEvents(undefined, MIN_DATE, new Date());

	// TODO
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const years = events.reduce((acc: number[], event: any) => {
		const year = new Date(event['end_date']).getFullYear();
		if (!acc.includes(year)) {
			acc.push(year);
		}
		return acc;
	}, []);

	return years.sort((a: number, b: number) => b - a);
};

/** the translator to convert html to markdown */
const translator = new NodeHtmlMarkdown();

/**
 * Generate Chronicle front matter for an event.
 * @see https://chroniclebot.com/docs/notifier/front-matter
 *
 * @returns Chronicle front matter.
 */
// TODO
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateChronicleFrontMatter = (info: any): string =>
	`+++${info['cropped_banner_url'] ? `\ncover="${info['cropped_banner_url']}"` : ''}${info['url'] ? `\nsummary_link="${info['url']}"` : ''}${info['picture']['url'] ? `\nthumbnail="${info['picture']['url']}"` : ''}\n+++${info['static_url'] ? `\n\nRSVP: ${info['static_url']}` : ''}${info['description'] ? `\n\n${translator.translate(info['description'])}` : ''}`;
