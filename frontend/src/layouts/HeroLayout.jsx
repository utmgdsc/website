'use client'
import {
    Container,
} from '@mui/material';

import {
    HeroHeader,
} from '../components';

import { useEffect } from 'react';

/**
 * Layout for pages with a hero header (home, about, etc.)
 * @param {Object} children - Children components
 * @param {string} title - Title of the page
 * @param {string} picture - Picture to be used as the hero header
 * @param {string} id - Container id
 * @param {string} position - Position of the hero header
 * @param {number} height - Height of the hero header
 * @return {JSX.Element} Resource layout component
 */
export const HeroLayout = ({ children, title, picture, id, position, height }) => {
    useEffect(() => {
        document.title = "GDSC UTM - " + title;
    }, [title]);

    return (
        <>
            <HeroHeader text={title} picture={picture} position={position} height={height} />
            <Container sx={{ py: 4 }} component="main" id={id}>
                {children}
            </Container>
        </>
    );
}
