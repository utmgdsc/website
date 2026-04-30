import { InfoCard, TabChanger } from '~/components/client';
import { Grid, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import proj from '~/data/projects.json';

const useModifySearchParams = (param: string) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const setParam = useCallback(
		(newValue: string) => {
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.set(param, newValue);
			const searchString = newSearchParams.toString();
			replace(`${pathname}?${searchString}`);
		},
		[searchParams, param, pathname, replace]
	);

	return [searchParams.get(param) || '', setParam] as const;
};

/**
 * A list of all the community projects filtered by year with tabs
 */
export const ProjectList = () => {
	const [yearParam, setYearParam] = useModifySearchParams('page');

	const projects = proj.projects;

	const yearList = useMemo(() => {
		const years = projects.reduce((acc: number[], project) => {
			if (!acc.includes(project.year)) {
				acc.push(project.year);
			}
			return acc;
		}, []);

		return years.toSorted((a, b) => b - a);
	}, [projects]);

	const setPage = useCallback(
		(page: number) => {
			setYearParam(yearList[page].toString());
		},
		[setYearParam, yearList]
	);

	const page = useMemo(() => {
		const pageIndex = yearList.findIndex(year => year.toString() === yearParam);
		return pageIndex === -1 ? 0 : pageIndex;
	}, [yearParam, yearList]);

	return (
		<>
			<TabChanger tabList={yearList} page={page} setPage={setPage} />
			<Grid container spacing={2}>
				{projects.filter(project => project.year === yearList[page]).length <= 0 && (
					<Grid size={12}>
						<Typography component="p">None yet! Check back soon :)</Typography>
					</Grid>
				)}
				{projects
					.filter(project => project.year === yearList[page])
					.map(project => (
						<Grid key={project.url} size={{ xs: 12, sm: 6, md: 4 }}>
							<InfoCard
								subtitle={`${project.session} ${project.year}`}
								title={project.title}
								description={project.description}
								href={project.url}
							/>
						</Grid>
					))}
			</Grid>
		</>
	);
};
