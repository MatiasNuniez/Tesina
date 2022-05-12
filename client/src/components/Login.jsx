import React from "react";
import '../app.css'

const Login = () => {
    return (
        <div className="login">
        <form action="post" className="form" style = {{width: 500}}>
        <div className = "socials">
            <div className = "loginButton gmail" style={{float: 'right'}}>
                <img src='' alt="" className = "icon" />
            </div>
        </div>
        <div>
        <p>Usuario/Correo <input type="text" className="form-control"  id= "correo" /></p>
        </div>
        <div>
        <p>Password<input type="password" className="form-control" id = "pass" /></p>
        </div>
        <button type = "submit" className = "btn btn-success" >Login</button>
    </form>
    </div>
)}

export default Login;