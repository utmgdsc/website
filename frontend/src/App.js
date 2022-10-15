import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import Homepage from "./components/Homepage/Homepage";
import BugReportForm from "./components/BugReport/BugReportForm";
import BugReportLogs from "./components/BugReportLogs/BugReportLogs";
import GeneralResources from "./components/General/GeneralResources/ResourceFilter";
import GeneralEvents from "./components/General/GeneralEvents/GeneralEvents";
import GeneralProjects from "./components/General/GeneralProjects/GeneralProjects";
// import GeneralPage from "./components/General/GeneralPage";
// import AdminPage from "./components/admin/AdminPage";
// import AdminLogin from "./components/admin/AdminLogin";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import DarkModeState from "./context/darkMode/DarkModeState";
import SetRoleState from "./context/setRole/SetRoleState";

const App = () => {
	return (
		<>
		<SetRoleState>
			<DarkModeState>
				<Router>
					<NavbarMenu pages="pages"/>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/resources" element={<GeneralResources />} />
						<Route path="/events" element={<GeneralEvents />} />
						<Route path="/pastProjects" element={<GeneralProjects />} />
						{/* <Route path="/admin/main" element={<AdminPage />} /> */}
						{/* <Route path="/general/main" element={<GeneralPage />} /> */}
						{/* <Route path="/admin/log" element={<AdminLogin />} /> */}
						<Route path="/reportBug" element={<BugReportForm />} />
						<Route path="/reportBugLogs" element={<BugReportLogs />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Router>
				<Footer />
			</DarkModeState>
			</SetRoleState>
		</>
	);
};

export default App;
