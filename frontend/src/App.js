import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import Navbarmenu from "./components/Navbarmenu/Navbarmenu";
import Homepage from "./components/Homepage/Homepage";
import ContactUs from "./components/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";
// import GeneralPage from "./components/General/GeneralPage";
// import AdminPage from "./components/admin/AdminPage";
// import AdminLogin from "./components/admin/AdminLogin";
import BugReportForm from "./components/BugReport/BugReportForm";
import Footer from "./components/Footer/Footer";
// import BugReportLogs from "./components/BugReportLogs/BugReportLogs";
import DarkModeState from "./context/darkMode/DarkModeState";
import GeneralResources from "./components/General/GeneralResources/ResourceFilter";
import GeneralEvents from "./components/General/GeneralEvents/GeneralEvents";
import GeneralProjects from "./components/General/GeneralProjects/GeneralProjects";
import SetRoleState from "./context/setRole/SetRoleState";

const App = () => {
  return (
    <>
    <SetRoleState>
      <DarkModeState>
        <Navbarmenu />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reportBug" element={<BugReportForm />} />
            {/* <Route path="/reportBugLogs" element={<BugReportLogs />} /> */}
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/resources" element={<GeneralResources />} />
            <Route path="/events" element={<GeneralEvents />} />
            <Route path="/pastProjects" element={<GeneralProjects />} />
            {/* <Route path="/admin/main" element={<AdminPage />} /> */}
            {/* <Route path="/general/main" element={<GeneralPage />} /> */}
            {/* <Route path="/admin/log" element={<AdminLogin />} /> */}
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
