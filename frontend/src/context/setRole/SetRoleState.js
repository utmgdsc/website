import SetRoleContext from "./SetRoleContext"
import useLocalStorage from "../../useLocalStorage"
const SetRoleState = (props) => {
    const state = {
        isAdmin: false
    }
    const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", state.isAdmin)
    const changeRole = (role) => {
        setIsAdmin(role)
    }
    return (
        <SetRoleContext.Provider value={{isAdmin, changeRole}}>
            {props.children}
        </SetRoleContext.Provider>
    )
}

export default SetRoleState