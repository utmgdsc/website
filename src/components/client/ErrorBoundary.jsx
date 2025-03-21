import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

/**
 * Props for the ErrorBoundary component
 * @typedef {Object} ErrorBoundaryProps
 * @prop {string} my margin-top and margin-bottom
 * @prop {React.ReactNode} children The children to render
 */

/**
 * Default error boundary component for catching errors in children components
 * using MUI Alert component
 *
 * AO from https://reactjs.org/docs/error-boundaries.html
 *
 * @augments React.Component<ErrorBoundaryProps>
 */
export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
		// You can also log error messages to an error reporting service here
	}

	render() {
		if (this.state.errorInfo) {
			// Error path
			return (
				<Alert
					severity="error"
					sx={{
						marginTop: this.props.my ? this.props.my : null,
						marginBottom: this.props.my ? this.props.my : null,
					}}
				>
					<AlertTitle>
						{this.state.error && this.state.error.toString()
							? this.state.error.toString()
							: 'Something went wrong :('}
					</AlertTitle>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						<summary>See stack trace</summary>
						<pre>{this.state.errorInfo.componentStack}</pre>
					</details>
				</Alert>
			);
		}
		// Normally, just render children
		return this.props.children;
	}
}
