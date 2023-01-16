import { useState } from "react";

// AO from https://usehooks.com/useLocalStorage/
export function getDescriptionFromStorage(id) {
	let events = window.localStorage.getItem("events") || JSON.stringify({});
	if (!JSON.parse(events)[id]) return;
	return JSON.parse(events)[id];
}

export function useLocalStorage(key) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === "undefined") {
			return;
		}
		try {
			return getDescriptionFromStorage(key);
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			const events = JSON.parse(window.localStorage.getItem("events")) || {};
			// Save to local storage
			if (typeof window !== "undefined") {
				events[key] = valueToStore;
				window.localStorage.setItem("events", JSON.stringify(events));
			}
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.error(error);
		}
	};
	return [storedValue, setValue];
}
