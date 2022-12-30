import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from '@emotion/react';
import GoogleTheme from "./components/Theme";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/Projects";
import Events from "./pages/Events";

import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
	return (
		<ThemeProvider theme={GoogleTheme}>
			<Router>
				<Navbar pages="pages"/>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/resources" element={<PageNotFound />} />
					<Route path="/events" element={<Events />} />
					<Route path="/past-projects" element={<ProjectPage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
