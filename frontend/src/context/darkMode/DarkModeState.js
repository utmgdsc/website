import DarkModeContext from "./DarkModeContext"
// import {useState} from "react"
import useLocalStorage from "../../useLocalStorage"
const DarkModeState = (props) => {
	const state = {
		mode: false
	}
	const [mode, setMode] = useLocalStorage("mode", state.mode)
	const toggleMode = () => {
		setMode(!mode)
	}
	return (
		<DarkModeContext.Provider value={{mode, toggleMode}}>
			{props.children}
		</DarkModeContext.Provider>
	)
}

export default DarkModeState