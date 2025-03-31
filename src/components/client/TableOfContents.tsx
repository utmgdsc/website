import { useEffect, useRef, useState } from 'react';
import { Link } from '~/components/server';
import { Box, Typography } from '@mui/material';

interface SmoothScrollingLinkProps {
	/** id of the element to scroll to */
	id: string;
	/** title of the link */
	title: string;
	/** children of the link */
	children?: React.ReactNode;
}

/**
 * A link that scrolls an id into view.. smoothly
 */
const SmoothScrollingLink = ({ id, title }: SmoothScrollingLinkProps) => {
	return (
		<Link
			sx={{ color: ({ vars }) => vars.palette.text.secondary }}
			href={`#${id}`}
			onClick={e => {
				e.preventDefault();
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}}
		>
			{title}
		</Link>
	);
};

interface TOCHeading {
	/** id of the heading */
	id: string;
	/** title of the heading */
	title: string;
	/** list of child headings */
	items: Array<{ id: string; title: string }>;
}

interface TOCHeadingProps {
	/** heading to be shown */
	heading: TOCHeading;
	/** current heading id is displayed now */
	activeId: string;
}

/**
 * TOCHeading component in table of content
 */
const TOCHeading = ({ heading, activeId }: TOCHeadingProps) => {
	return (
		<li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
			<SmoothScrollingLink id={heading.id} title={heading.title} />
			{heading.items.length > 0 && (
				<ul>
					{heading.items.map(child => (
						<li key={child.id} className={child.id === activeId ? 'active' : ''}>
							<SmoothScrollingLink id={child.id} title={child.title} />
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

/**
 * Get list of nested headings (h2 elements followed by h3 elements)
 * @param headingElements list of h2 and h3 elements
 */
const getNestedHeadings = (headingElements: HTMLElement[]) => {
	const nestedHeadings: TOCHeading[] = [];

	headingElements.forEach(heading => {
		const { innerText: title, id } = heading;

		if (heading.nodeName === 'H2') {
			nestedHeadings.push({ id, title, items: [] });
		} else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
			nestedHeadings[nestedHeadings.length - 1].items.push({
				id,
				title,
			});
		}
	});

	return nestedHeadings;
};

/**
 * Get all the h2 and h3 headings in resources page, and turn them into list of nested headings
 */
const useHeadingsData = () => {
	const [nestedHeadings, setNestedHeadings] = useState<TOCHeading[]>([]);

	useEffect(() => {
		const headingElements = Array.from(document.querySelectorAll('h2.resources, h3.resources'));

		const newNestedHeadings = getNestedHeadings(headingElements as HTMLElement[]);
		setNestedHeadings(newNestedHeadings);
	}, []);

	return { nestedHeadings };
};

/**
 * Check what heading/section the user is browsing and set its id
 * @param {(activeId: string) => void} setActiveId - function to set the active id
 */
const useIntersectionObserver = setActiveId => {
	const headingElementsRef = useRef({});
	useEffect(() => {
		const headingElements = Array.from(document.querySelectorAll('h2.resources, h3.resources'));

		const callback = headings => {
			headingElementsRef.current = headings.reduce((map, headingElement) => {
				map[headingElement.target.id] = headingElement;
				return map;
			}, headingElementsRef.current);

			const visibleHeadings: IntersectionObserverEntry[] = [];
			Object.keys(headingElementsRef.current).forEach(key => {
				const headingElement = headingElementsRef.current[key];
				if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
			});

			const getIndexFromId = id => headingElements.findIndex(heading => heading.id === id);

			if (visibleHeadings.length === 1) {
				setActiveId(visibleHeadings[0].target.id);
			} else if (visibleHeadings.length > 1) {
				const sortedVisibleHeadings = visibleHeadings.sort(
					(a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
				);
				setActiveId(sortedVisibleHeadings[0].target.id);
			}
		};

		const observer = new IntersectionObserver(callback, {
			rootMargin: '0px 0px -40% 0px',
		});

		headingElements.forEach(element => observer.observe(element));

		return () => {
			observer.disconnect();
		};
	}, [setActiveId]);
};

/**
 * Generates a table of contents based on the headings in the page
 */
export const TableOfContents = () => {
	const [activeId, setActiveId] = useState<string>('');
	const { nestedHeadings } = useHeadingsData();
	useIntersectionObserver(setActiveId);
	return (
		<Box
			id="table-of-contents"
			sx={{
				position: 'sticky',
				top: '4rem',
				maxHeight: 'calc(100vh - 40px)',
				overflow: 'auto',
				a: {
					textDecoration: 'none',
				},
				li: {
					'&.active > a': {
						color: ({ vars }) => vars.palette.primary.main,
					},
					'> a:hover': {
						color: ({ vars }) => vars.palette.primary.main,
					},
				},
			}}
		>
			<Typography variant="h5">On this page</Typography>
			<nav aria-label="Table of contents">
				<ul>
					{nestedHeadings.map((heading, index) => {
						return <TOCHeading heading={heading} activeId={activeId} key={index} />;
					})}
				</ul>
			</nav>
		</Box>
	);
};
