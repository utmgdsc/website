/** @jsxImportSource @emotion/react */
import React from 'react';

import {
  alpha,
  Box,
  Container,
  Typography,
  useTheme
} from '@mui/material';

import HeroImage from '../../assets/backgrounds/background.jpg';
import HeroImageDark from '../../assets/backgrounds/background_dark.jpg';
import wordmark from '../../assets/graphics/gdscwordmark.svg';
import { SkeletonLoadedImage } from '../../components';
import { THEME } from '../theme';

export const HomepageHero = () => {
    const theme = useTheme();

    return (
        <section>
            <Box
                sx={{
                    background: "linear-gradient(" + theme.palette.background.default + " 0%,"
                        + alpha(theme.palette.background.default, 0.8) + "69%,"
                        + theme.palette.background.default + " 100%), url("
                        + (theme.palette.mode === THEME.DARK ? HeroImageDark.src: HeroImage.src) + ") no-repeat",
                    backgroundSize: "cover",
                    marginBottom: "-15vh",
                    pb: 6,
                    pt: 8,
                }}
            >
                <Container maxWidth="sm" sx={{ height: "50vh", position:"relative" }}>
                    <Typography
                        align="center"
                        color="text.primary"
                        component="h1"
                        gutterBottom
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            height: "50vh",
                            justifyContent: "center",
                            margin: "auto",
                            userSelect: "none",
                        }}
                        variant="h2"
                    >
                        <SkeletonLoadedImage
                            alt="Google Developer Student Clubs University of Toronto Mississauga"
                            id="gdsc-wordmark"
                            src={wordmark}
                            css={{objectFit:"contain"}}
                            dimensions="100%"
                        />
                    </Typography>
                </Container>
            </Box>
        </section>
    );
}
