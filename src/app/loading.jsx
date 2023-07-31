import {
	LinearProgress,
	Skeleton
} from '@mui/material';

/**
 * Loading page
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/loading
 */
export default function Loading() {
	return (
		<div style={{ height: '100vh' }}>
			<LinearProgress title="Page loading" />
			<div className="hero-header-parallax">
				<Skeleton variant="rectangular" animation="wave" height="30rem" />
			</div>
		</div>
	);
};
