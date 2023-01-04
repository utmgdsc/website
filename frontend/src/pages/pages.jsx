import React, { lazy } from "react";
const Homepage = lazy(() => import("./Homepage"));
const ResourcesPage = lazy(() => import("./Resources"));
const ProjectPage = lazy(() => import("./Projects"));
const Events = lazy(() => import("./Events"));
const BrandResources = lazy(() => import("./Resources/BrandResources"));
const WorkshopArchive = lazy(() => import("./Resources/WorkshopArchive"));

/**
 * The list of pages that are available on the website.
 * Note the order of the pages is the order they will appear in the navbar.
 * @type {Array<{name: string, path: string, component: JSX.Element}>}
 */
const pages = [
	{
		name: "About",
		path: "/",
		component: <Homepage />
	},
	{
		name: "Resources",
		path: "/resources",
		component: <ResourcesPage />
	},
	{
		name: "",
		path: "/resources/logo-download",
		component: <BrandResources />
	},
	{
		name: "",
		path: "/resources/workshops",
		component: <WorkshopArchive />
	},
	{
		name: "Projects",
		path: "/projects",
		component: <ProjectPage />
	},
	{
		name: "Events",
		path: "/events",
		component: <Events />
	}
];

export default pages;
