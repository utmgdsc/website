import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface ErrorBoundaryProps {
	my?: string | number;
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	error: Error | null;
	errorInfo: React.ErrorInfo | null;
}

const ErrorBoundaryBody = ({
	my,
	message,
	trace,
}: {
	my?: string | number;
	message: string;
	trace: string | null | undefined;
}) => (
	<Alert severity="error" sx={{ my }}>
		<AlertTitle>{message}</AlertTitle>
		{trace && (
			<details style={{ whiteSpace: 'pre-wrap' }}>
				<summary>See stack trace</summary>
				<pre>{trace}</pre>
			</details>
		)}
	</Alert>
);

/**
 * Default error boundary component for catching errors in children components
 * using MUI Alert component
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<ErrorBoundaryBody
					my={this.props.my}
					message={this?.state?.error?.toString() ?? 'Something went wrong :('}
					trace={this?.state?.errorInfo?.componentStack}
				/>
			);
		}

		return this.props.children;
	}
}
