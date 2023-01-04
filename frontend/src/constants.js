/**
 * The possible states for the upcoming events filter used in the EventList component.
 * @type {Object}
 * @property {number} ALL - Show all events
 * @property {number} UPCOMING - Show upcoming events only
 * @property {number} PAST - Show past events only
 * @readonly
 */
export const EventUpcomingStates = {
	/**
	 * Show all events
	 */
	ALL: 0,

	/**
	 * Show upcoming events only
	 */
	UPCOMING: 1,

	/**
	 * Show past events only
	 */
	PAST: -1,
}

export const CardColors = ["success", "error", "warning", "info"];
