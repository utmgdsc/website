/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';

import {
  Container,
  Typography,
} from '@mui/material';

import BannerImg from '../../../assets/graphics/logo_clouds.png';
import {
  HeroHeader,
  RouterBreadcrumb,
} from '../../../components';

/**
 * @return {JSX.Element} Brand resources page component
 */
const BrandResources = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Logo Download";
	}, []);
	return (
		<>
			<HeroHeader text="Logo download" picture={BannerImg} />

			<Container sx={{ py: 4 }} component="main" id="events">
				<RouterBreadcrumb/>

				<br/>

				<em>Last updated 2023-01-01</em>

				<section>
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Guidelines (tl;dr)
					</Typography>
					<ul>
						<li aria-level={1}>
							Google colors (in the following order):{" "}
							<span css={{ color: "#4285F4", fontWeight: 700 }}> #4285F4 </span>
							<span css={{ color: "#EA4335", fontWeight: 700 }}> #EA4335 </span>
							<span css={{ color: "#FBBC04", fontWeight: 700 }}> #FBBC04 </span>
							<span css={{ color: "#34A853", fontWeight: 700 }}> #34A853 </span>
						</li>
						<ul>
							<li aria-level={2}>
								Google Logo Grey
								<span css={{ color: "#656c73", fontWeight: 700 }}> #656c73 </span>
							</li>
						</ul>
						<li aria-level={1}>
							Logo guidelines:{" "}
							<a href="https://goo.gle/gdsc-brand-guide" css={{ textDecorationLine: "none" }}>
								https://goo.gle/gdsc-brand-guide
							</a>, tl;dr:
							<ul>
								<li>use the entirely white logo on coloured backgrounds and not too busy backgrounds</li>
								<li>use the coloured (multicolour bracket, grey text) logo on white and grey backgrounds</li>
								<li>use the horizontal logo when space allows</li>
								<li>use the stacked logo when there is limited space</li>
								<li>use just the bracket icon when space is very limited (like when next to other club logos)</li>
							</ul>
						</li>
					</ul>
				</section>

				<section>
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						The goods
					</Typography>
					<pre>tbd - ask us on discord for now! </pre>
				</section>
			</Container>
		</>
	);
}

export default BrandResources;
