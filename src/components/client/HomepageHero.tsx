import HeroImage from '~/assets/backgrounds/background_light.svg';
import HeroImageDark from '~/assets/backgrounds/background_dark.svg';
import wordmark from '~/assets/graphics/gdscwordmark.svg';
import type {} from '@mui/material/themeCssVarsAugmentation';
import type { Theme } from '@mui/material';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

const getBackgroundImage = (theme: Theme, image: string) =>
	'linear-gradient(' +
	theme.vars.palette.background.default +
	' 0%,' +
	`color-mix(in srgb, ${theme.vars.palette.background.default}, transparent 20%)` +
	'69%,' +
	theme.vars.palette.background.default +
	' 100%), url(' +
	image +
	')';

/**
 * @returns Hero header for the homepage.
 */
export const HomepageHero = () => {
	return (
		<section>
			<Box
				sx={theme => ({
					pb: 6,
					pt: 8,
					marginBottom: '-15vh',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: getBackgroundImage(theme, HeroImage),
					...theme.applyStyles('dark', {
						backgroundImage: getBackgroundImage(theme, HeroImageDark),
					}),
				})}
			>
				<Container maxWidth="sm" sx={{ height: '50vh', position: 'relative' }}>
					<Typography
						align="center"
						component="h1"
						gutterBottom
						variant="h2"
						sx={{
							color: 'text.primary',
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
							height: '50vh',
							justifyContent: 'center',
							margin: 'auto',
							userSelect: 'none',
						}}
					>
						<Box
							component={Image}
							alt="Google Developer Student Clubs University of Toronto Mississauga"
							fill={true}
							id="gdsc-wordmark"
							src={wordmark}
							sx={theme => ({
								objectFit: 'contain',
								...theme.applyStyles('dark', {
									filter: 'grayscale(1)invert(1)brightness(1.5)',
								}),
							})}
						/>
					</Typography>
				</Container>
			</Box>
		</section>
	);
};
