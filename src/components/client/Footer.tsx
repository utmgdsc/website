import { Box, ButtonGroup, Container, Paper, Theme, Typography, styled } from '@mui/material';
import bracket_colourless from '~/assets/graphics/bracket_colourless.svg';
import { ErrorBoundary } from '~/components/client';
import { Link, LinkProps } from '~/components/server';
import * as allSocialButtons from '~/data/SocialButton';
import type { FooterLinksData } from '~/data/footer.d.ts';
import _footerLinks from '~/data/footer.json';
import Image from 'next/image';

const footerLinks: FooterLinksData = _footerLinks;

/**
 * A link for footer-flex. Takes the same props as "a".
 * @param props - props to pass to the link, same as "a" element
 *
 * @return Footer link
 */
const FooterLink = (props: LinkProps) => (
	<Box
		component="li"
		sx={{
			color: ({ vars }: Theme) => vars?.palette.text.secondary,
			padding: {
				xs: '0.5em 0',
				sm: '0',
			},
		}}
	>
		<Link
			sx={{
				color: 'inherit',
				minWidth: '8rem',
				opacity: 0.9,
				display: 'block',
				transition: 'background .3s ease, box-shadow .3s ease, opacity .3s ease',

				'&:focus-visible': {
					opacity: 1,
					padding: '0 2px',
				},

				'&:hover': {
					opacity: 1,
				},

				'&:active': {
					opacity: 0.3,
				},
			}}
			{...props}
		/>
	</Box>
);

const FooterUnorderedList = styled('ul')({
	listStyleType: 'none',
	padding: '0 !important',
	margin: '0 !important',
});

/**
 * @returns Footer component
 */
export const Footer = () => {
	return (
		<Paper
			elevation={3}
			component="footer"
			sx={{
				margin: '1rem 0 0 0',
				padding: '1rem 0',
				width: '100%',
			}}
		>
			<Container maxWidth="xl">
				<Box
					id="footer"
					sx={{
						display: {
							xs: 'block',
							sm: 'flex',
						},
					}}
				>
					<Typography
						component="h2"
						sx={{
							width: {
								sm: '12.5rem',
								xs: '100%',
							},
							margin: '0 !important',
							paddingBottom: {
								sm: '0',
								xs: '1em',
							},
						}}
					>
						<Link
							href="/"
							sx={{
								img: {
									filter: 'invert(48%) sepia(5%) saturate(88%) hue-rotate(202deg) brightness(90%) contrast(88%)',
									paddingTop: '0.5rem',
								},
							}}
						>
							<Image
								src={bracket_colourless}
								className="logo"
								height="64"
								width="64"
								draggable="false"
								alt="Footer"
							/>
						</Link>
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							alignContent: {
								sm: 'center',
								xs: 'flex-start',
							},
							display: 'flex',
							flexDirection: {
								xs: 'column',
								sm: 'row',
							},
							flexWrap: 'wrap',
							justifyContent: 'flex-start',
						}}
					>
						<ErrorBoundary>
							{
								/* iterate through top level keys in footerLinks
								 * must only iterate through keys as forEach does not return anything
								 * and thus cannot be used for react purposes
								 * key name is used as the header text */
								Object.keys(footerLinks).map(header => {
									return (
										<Box sx={{ width: '12.5rem' }} key={header}>
											<Typography variant="h6" component="h2">
												{header}
											</Typography>
											<FooterUnorderedList>
												{Object.keys(footerLinks[header]).map(link => {
													return (
														<FooterLink
															key={link}
															href={footerLinks[header][link].URL}
															external={footerLinks[header][link].external}
														>
															{link}
														</FooterLink>
													);
												})}
											</FooterUnorderedList>
										</Box>
									);
								})
							}
						</ErrorBoundary>
					</Box>
				</Box>

				<Box
					sx={{
						alignItems: {
							sm: 'center',
							xs: 'flex-start',
						},
						display: 'flex',
						flexWrap: 'wrap',
						padding: {
							sx: '0 1em',
							sm: '0',
						},
						flexDirection: {
							sm: 'row',
							xs: 'column',
						},
						width: '100%',
					}}
				>
					<FooterUnorderedList sx={{ paddingTop: '1em' }}>
						<FooterLink href="https://github.com/utmgdsc/website/issues/new/choose" external>
							Improve this page on GitHub
						</FooterLink>
					</FooterUnorderedList>
					<ButtonGroup
						id="social"
						sx={{
							flexGrow: 1,
							flexFlow: 'row-reverse wrap',
							textAlign: 'right',
						}}
					>
						{Object.values(allSocialButtons).map((SocialButton, index) => {
							return <SocialButton key={index} />;
						})}
					</ButtonGroup>
				</Box>
			</Container>
		</Paper>
	);
};
