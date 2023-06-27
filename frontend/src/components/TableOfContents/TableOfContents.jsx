'use client'
import './TableOfContents.scss';

/** @jsxImportSource @emotion/react */
import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * @returns {JSX.Element} Table of content component
 */
export const TableOfContents = () => {
	const [activeId, setActiveId] = useState();
	const { nestedHeadings } = useHeadingsData();
	useIntersectionObserver(setActiveId);
	return (
		<div id="table-of-contents">
			<Typography
				fontWeight="bold"
				color="text.primary"
				variant="h5"
				margin="0.83em 0"
			>
				On this page
			</Typography>
			<nav aria-label="Table of contents">
				<ul>
					{nestedHeadings.map((heading, index) => {
						return (
							<TOCHeading heading={heading} activeId={activeId} key={index} />
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

/**
 * TOCHeading component in table of content
 * @param {heading} heading to be shown
 * @param {activeId} current heading id is displayed now
 * @returns {JSX.Element} JSX elements of heading component
 */
const TOCHeading = ({ heading, activeId }) => {
	const theme = useTheme();
	return (
		<li key={heading.id} className={heading.id === activeId ? "active" : ""}>
			<a
				css={{ color: theme.palette.text.secondary }}
				href={`#${heading.id}`}
				onClick={(e) => {
					e.preventDefault();
					document.querySelector(`#${heading.id}`).scrollIntoView({
						behavior: "smooth"
					});
				}}
			>
				{heading.title}
			</a>
			{heading.items.length > 0 && (
				<ul>
					{heading.items.map((child) => (
						<li key={child.id} className={child.id === activeId ? "active" : ""}>
							<a
								css={{ color: theme.palette.text.secondary }}
								href={`#${child.id}`}
								onClick={(e) => {
									e.preventDefault();
									document.querySelector(`#${child.id}`).scrollIntoView({
										behavior: "smooth"
									});
								}}
							>
								{child.title}
							</a>
						</li>
					))}
				</ul>
			)}
		</li>
	)
};

/**
 * Get list of nested headings (h2 elements followed by h3 elements)
 */
const getNestedHeadings = (headingElements) => {
	const nestedHeadings = [];

	headingElements.forEach((heading, index) => {
		const { innerText: title, id } = heading;

		if (heading.nodeName === "H2") {
			nestedHeadings.push({ id, title, items: [] });
		} else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
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
	const [nestedHeadings, setNestedHeadings] = useState([]);

	useEffect(() => {
		const headingElements = Array.from(
			document.querySelectorAll("h2.resources, h3.resources")
		);

		const newNestedHeadings = getNestedHeadings(headingElements);
		setNestedHeadings(newNestedHeadings);
	}, []);

	return { nestedHeadings };
};

/**
 * Check what heading/section the user is browsing and set its id
 */
const useIntersectionObserver = (setActiveId) => {
	const headingElementsRef = useRef({});
	useEffect(() => {
		const callback = (headings) => {
			headingElementsRef.current = headings.reduce((map, headingElement) => {
				map[headingElement.target.id] = headingElement;
				return map;
			}, headingElementsRef.current);

			const visibleHeadings = [];
			Object.keys(headingElementsRef.current).forEach((key) => {
				const headingElement = headingElementsRef.current[key];
				if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
			});

			const getIndexFromId = (id) =>
				headingElements.findIndex((heading) => heading.id === id);

			if (visibleHeadings.length === 1) {
				setActiveId(visibleHeadings[0].target.id);
			} else if (visibleHeadings.length > 1) {
				const sortedVisibleHeadings = visibleHeadings.sort(
					(a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
				);
				setActiveId(sortedVisibleHeadings[0].target.id);
			}
		};

		const observer = new IntersectionObserver(callback, {
			rootMargin: "0px 0px -40% 0px"
		});

		const headingElements = Array.from(document.querySelectorAll("h2.resources, h3.resources"));

		headingElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [setActiveId]);
};
