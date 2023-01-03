/** @jsxImportSource @emotion/react */
import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			errorInfo: errorInfo
		})
		// You can also log error messages to an error reporting service here
	}

	render() {
		if (this.state.errorInfo) {
			// Error path
			return (
				<Alert severity="error">
					<AlertTitle>
						{
							this.state.error && this.state.error.toString() ? this.state.error.toString() : "Something went wrong :("
						}
					</AlertTitle>
					<details css={{ whiteSpace: "pre-wrap" }}>
						<summary>See stack trace</summary>
						<pre>
							{this.state.errorInfo.componentStack}
						</pre>
					</details>
				</Alert>
			);
		}
		// Normally, just render children
		return this.props.children;
	}
}

export default ErrorBoundary;
