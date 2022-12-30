import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import GoogleTheme from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";


import { ThemeProvider, LinearProgress } from "@mui/material";

import pages from "./pages/pages";

const App = () => {
	return (
		<ThemeProvider theme={GoogleTheme}>
			<Router>
				<Navbar pages="pages" />
				<Suspense fallback={<><LinearProgress /><div style={{height: "100vh"}}></div></>}>
					<Routes>
						{
							pages.map((page, index) => {
								return <Route path={page[1]} element={page[2]} key={index} />;
							})
						}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</Router>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
