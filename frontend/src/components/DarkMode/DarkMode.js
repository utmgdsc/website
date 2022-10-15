import DarkModeContext from "../../context/darkMode/DarkModeContext"
import {useContext} from "react"
import {WbSunny, DarkMode as ModeNight} from '@mui/icons-material'

const DarkMode = () => {
	const {mode, toggleMode} = useContext(DarkModeContext)

	return (
		<div className="dark-mode">
			<label className='switch mr-5'>
				<input
					type="checkbox"
					onChange={() => toggleMode()}
					checked={mode}
				/>
				<span className="slider round"></span>
			</label>
			{mode === true ? <WbSunny /> : <ModeNight />}

		</div>
	)
}

export default DarkMode