interface JoinAndProps {
	/** The items to join */
	items: string[];
}

/**
 * Simple function to join strings with commas and an "and" at the end
 * @returns The JoinAnd(joined items)
 */
export const JoinAnd = ({ items }: JoinAndProps) => {
	// the length of the list of items is stored in the length variable
	const length = items.length;

	// If there is only one item, return the first item.
	if (length === 1) {
		return items[0];
	}

	// If there are two items, return a string with "and" in the middle.
	else if (length === 2) {
		return items.join(' and ');
	}

	// If there are more than two items, join all items except the last one,
	// then add the last item with "and" in the middle.
	else {
		return items.slice(0, -1).join(', ') + ', and ' + items[length - 1];
	}
};
