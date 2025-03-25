import { Search } from '@mui/icons-material';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

const useDebouncedValue = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

/**
 * Modify a search parameter in the URL
 *
 * @param searchParams - The current search parameters
 * @param key - The key of the search parameter to modify
 * @param value - The new value of the search parameter
 *
 * @returns The new search string without the question mark
 */
const modifySearchParam = (searchParams: URLSearchParams, key: string, value: string): string => {
	if (value === '') {
		searchParams.delete(key);
	} else {
		searchParams.set(key, value);
	}
	return searchParams.toString();
};

const _WorkshopSearch = () => {
	const searchParams = useSearchParams();
	const [search, setSearch] = useState(searchParams.get('search') || '');
	const debouncedSearch = useDebouncedValue(search, 300);

	useEffect(() => {
		const newSearch = modifySearchParam(new URLSearchParams(), 'search', debouncedSearch);
		window.history.replaceState(null, '', `?${newSearch}`);
	}, [debouncedSearch]);

	return (
		<TextField
			id="workshop-search"
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					),
				},
			}}
			value={search}
			onChange={e => {
				setSearch(e.target.value);
			}}
			placeholder="Search..."
			variant="outlined"
			fullWidth
		/>
	);
};

export const WorkshopSearch = () => (
	<Suspense
		fallback={
			<TextField
				id="workshop-search"
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					},
				}}
				disabled
				placeholder="Search..."
				variant="outlined"
				fullWidth
			/>
		}
	>
		<_WorkshopSearch />
	</Suspense>
);
