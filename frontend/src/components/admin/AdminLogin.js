import React, {useState, useContext} from "react";
import LoginStyle from "../../css/admin/AdminLogin.module.css";
import dsc_utm from "../../assets/dsc_utm.png";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import banner from "../../assets/banner.png";
import DarkModeContext from "../../context/darkMode/DarkModeContext";
import SetRoleContext from "../../context/setRole/SetRoleContext"
import axios from "axios"
export default function AdminLogin(){
    // reference: https://gdscutm.com/
    const [loginInfo,setLoginInfo] = useState(
        {
            AdminId: null,
            Password: null
        }
    )
    const {mode, toggleMode} = useContext(DarkModeContext)
    const {isAdmin, changeRole} = useContext(SetRoleContext)
    const [errorMessage, setErrorMessage] = useState("")
    const [showError, setShowError] = useState(false)
    const submitButton=()=>{
        console.log(loginInfo);
            axios.post("/login", {
              data: {
                 email: loginInfo.AdminId,
                 password: loginInfo.Password,
                 mode: "admin"
              }, 
            }).then((res) => {
              changeRole(res.data.isAdmin)
              window.location.href = "/"
              localStorage.setItem("token", res.data.token)
            }).catch((err) => {
                setErrorMessage(err.response.data.message)
                setShowError(true)
            })
          
    }
    // background styles
    const styles = {
        container: {
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        },
        hideImage: {
            backgroundImage: "none"
        }
    };
    return (
            <div className={mode === true ? "dark" : ""} style={mode === true ? styles.hideImage : styles.container}>
            <div className={`d-flex flex-column ${LoginStyle.background_container}`}>
            <div className={LoginStyle.admin_logo_box}>
                <h1>
                    <img src={dsc_utm} alt ="" className = {LoginStyle.admin_logo}></img>
                </h1>
            </div>
            <div className="align-self-center">
            {showError && (<div class="alert alert-danger d-flex align-items-center justify-content-around">
                  <p className="m-0"><strong>Error!</strong> {errorMessage}</p>
                  <a href='#' style={{color: "black"}} onClick={() => setShowError(false)}>&times;</a>
              </div>)}
                <Form className="d-flex flex-column" method="Post">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Adminitrator ID" onChange = {e=>setLoginInfo({AdminId:e.target.value,Password:loginInfo.Password})}className={LoginStyle.input_box_length}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" onChange = {e=>setLoginInfo({Password:e.target.value,AdminId:loginInfo.AdminId})}className={LoginStyle.input_box_length}/>
                        </Col>
                    </Form.Group>
                    <Button action="submit" className="align-self-center mt-3 w-100" onClick={submitButton}>Sign In</Button>
                </Form>
            </div>
        </div>
        </div>
    );
}