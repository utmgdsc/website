'use client';
/* eslint-disable import/export */

/**
 * Clients components are placed in a separate folder for easier organization.
 *
 * `use client` directive placed here to avoid weird Emotion errors (when placing
 * them in each component) and to avoid typing it in each component.
 *
 * @see https://nextjs.org/docs/getting-started/react-essentials#client-components
 * @fileoverview Barrel file for client components.
 */
export * from './Accordion2';
export * from './ErrorBoundary';
export * from './FAQ';
export * from './FAQList';
export * from './Footer';
export * from './HeroHeader';
export * from './HomepageHero';
export * from './ImageFilterProps';
export * from '../../data/theme';
export * from './InfoCard';
export * from './Navbar';
export * from './PathnameTabs';
export * from './ProjectList';
export * from './RouterBreadcrumb';
export * from './TabChanger';
export * from './TableOfContents';
export * from './TagManager';
export * from './ThemedImage';
export * from './ThemeRegistry';
export * from './WorkshopButton';
export * from './WorkshopSearch';
export * from './WorkshopWidget';
