import React, { lazy } from 'react';
const Homepage = lazy(() => import("./Homepage"));
const ProjectPage = lazy(() => import("./Projects"));
const Events = lazy(() => import("./Events"));
const PageNotFound = lazy(() => import("./PageNotFound"));

/**
 * This file contains the list of pages that are available on the website.
 * The first element of each array is the name of the page, the second is the
 * path to the page, and the third is the component that is rendered.
 */
const pages = [["About", "/", <Homepage />],
               ["Resources", "/resources", <PageNotFound />],
               ["Past Projects", "/past-projects", <ProjectPage />],
               ["Events", "/events", <Events />]];

export default pages;
