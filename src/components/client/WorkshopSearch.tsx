import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

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
 * @param searchParams The current search parameters
 * @param key The key of the search parameter to modify
 * @param value The new value of the search parameter
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

const InternalWorkshopSearch = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [search, setSearch] = useState(searchParams.get('search') ?? '');
	const debouncedSearch = useDebouncedValue(search, 300);

	useEffect(() => {
		const currentSearch = searchParams.get('search') ?? '';
		if (debouncedSearch === currentSearch) return;

		const newParams = new URLSearchParams(searchParams);
		const newSearch = modifySearchParam(newParams, 'search', debouncedSearch);
		router.replace(`/past-workshops?${newSearch}`);
	}, [debouncedSearch, router, searchParams]);

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
		<InternalWorkshopSearch />
	</Suspense>
);
