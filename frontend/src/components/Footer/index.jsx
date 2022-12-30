// import React, { useContext } from "react";
import "./index.scss";
import { Container, Typography } from "@mui/material";

const Footer = () => {
	return (
		<footer>
			<Container maxWidth="xl">
				<div class="footer-flex">
					<div class="logo-group flex-item">
						<a href="/" class="ignore-jerry-mouse"><span class="vox-only">Home</span></a>
					</div>

					<div class="flex-item">
						<Typography variant="h6">Contact</Typography>
						<ul>
							<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/utmgdsc/PollVotingSystem">MCS PollVoting</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/utmgdsc/PollVotingSystem">MCS PollVoting</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/utmgdsc/PollVotingSystem">MCS PollVoting</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/utmgdsc/">View all repos&hellip;</a></li>
						</ul>
					</div>

					<div class="flex-item">
						<Typography variant="h6">Connect</Typography>
						<ul>
							<li><a rel="noopener noreferrer" target="_blank" href="https://discord.gg/FMJNvhXJAa">Discord</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://instagram.com/gdscutm">Instagram</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/gdscutm">Twitter</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/gdscuoftmississauga">Facebook</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/google-developer-student-clubs-uoft-mississauga/">LinkedIn</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="https://youtube.com/@gdscutm">YouTube</a></li>
							<li><a rel="noopener noreferrer" target="_blank" href="mailto:utmdsc@gmail.com">Email</a></li>
						</ul>
					</div>
				</div>

				<div class="footer-text">
					<p style={{ padding: 0 }}>
						<a href="https://github.com/utmgdsc/website/issues/new/choose" target="_blank" rel="noopener noreferrer">Improve this page on GitHub</a>
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
