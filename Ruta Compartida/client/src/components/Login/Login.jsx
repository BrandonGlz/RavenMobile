import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom"; 
import Axios from "axios";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const currentLogin = async(event)=>{
        event.preventDefault();

        //Validar que pongan correo y contraseña
        if (!email || !password) {
            alert("Email and password are required");
            return;
        }

        try {
            const response = await Axios.post("http://localhost:3001/login",{
                email:email,
                password:password
            });

            //Si es valida la peticion, obtenemos el rol
            const {role} = response.data;

            //redigir dependiento el rol
            if (role === "DRIVE") {
                navigate("/Driver/Index")
            } else if (role === "PASSE") {
                navigate("/Passenger/Index")
            } 
        } catch (error) {
            alert("Email or Password incorrect, please check")
        }
    }

    return (
        <div className="container">
            <div className="return-button">
                <Link to="/">Go Back</Link> 
            </div>
            <form className="form" onSubmit={currentLogin}>
                <div className="labels">
                    <p>Your Email</p>
                    <p>And Password</p>
                </div>
                <div className="inputs">
                    <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    />
                </div>
                <div className="buttons">
                    <Link to="/Forget_My_Password/ResetPassword">Forgot Password?</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;