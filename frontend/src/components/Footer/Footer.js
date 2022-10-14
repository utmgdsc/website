import React, {useContext} from "react";
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import "./Footer.css";

const Footer = () => {
  const {mode, toggleMode} = useContext(DarkModeContext)
  return (
    <footer className={mode === true ? "dark" : ""}>
      <a href="/contactUs">Contact Us</a>
      <a href="/reportBug">Report a Bug</a>
    </footer>
  );
};

export default Footer;
