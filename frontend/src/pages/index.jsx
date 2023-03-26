import React, { lazy } from 'react';

const Homepage = lazy(() => import("./Homepage"));
const ResourcesPage = lazy(() => import("./Resources"));
const ProjectPage = lazy(() => import("./ProjectsPage"));
const Events = lazy(() => import("./Events"));
const BrandResources = lazy(() => import("./Resources/BrandResourcesPage"));
const WorkshopArchive = lazy(() => import("./Resources/WorkshopsPage"));
const TechTips = lazy(() => import("./Resources/TipsPage"));

/**
 * The list of pages that are available on the website.
 * Note the order of the pages is the order they will appear in the navbar.
 * @type {Array<{name: string, path: string, component: JSX.Element, includeInNavbar: boolean}>}
 */
export const pages = [
	{
		name: "About",
		path: "/",
		component: <Homepage />,
		includeInNavbar: true
	},
	{
		name: "Resources",
		path: "/resources",
		component: <ResourcesPage />,
		includeInNavbar: true
	},
	{
		name: "Logo Download",
		path: "/resources/logo-download",
		component: <BrandResources />,
		includeInNavbar: false
	},
	{
		name: "Workshop Archive",
		path: "/resources/workshops",
		component: <WorkshopArchive />,
		includeInNavbar: false
	},
	{
		name: "Tech Tips",
		path: "/resources/tips",
		component: <TechTips />,
		includeInNavbar: false
	},
	{
		name: "Projects",
		path: "/projects",
		component: <ProjectPage />,
		includeInNavbar: true
	},
	{
		name: "Events",
		path: "/events",
		component: <Events />,
		includeInNavbar: true
	}
];
