import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const AccountDetails = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [personalData, setPersonalData] = useState("");
  const [studentId, setStudentId] = useState("");

  useEffect(() => {

    //Recepcion de datos del modulo anterior
    const storeId = sessionStorage.getItem("personalData");
    if (storeId) {
      setPersonalData(storeId);
    }

    const storeStudentId = sessionStorage.getItem("studentId");
    if (storeStudentId) {
      setStudentId(storeStudentId);
    }
  }, []);

  const add = () => {

    //Validacion de dominio en el correo electronico

    if (!email) {
      alert("Email cannot be empty")
    }

    const formatEmail = studentId + '@ut-tijuana.edu.mx';
    if (email !== formatEmail) {
      alert("Format incorrect of email, try: " + formatEmail);
      return;
    }

    //Validacion de un minimo de 8 caracteres en la contraseña
    if (!password) {
      alert("Password cannot be empty")
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long")
      return;
    }

    //Validacion de que coincidad las contraseñas
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    //Si pasa las validaciones, se realiza el post(inserto) en la tabla de nuestro host
      Axios.post("http://localhost:3001/accountDetail", {
      email: email,
      password: password,
      personalData: personalData
    }).then(() => {
      alert("Registro con exito!!");

      // Si se puede realizar el registro se elimina los datos del usuario anterior
      // Con el fin de reutilizar el metodo para futuros registros
      sessionStorage.removeItem("personalData");
      sessionStorage.removeItem("studentId");
      navigate("/"); // Redirige a la página de inicio después del registro
    });
  };

  return (
    <div className="container">
      <div className="return-button">
        <Link to="/Register/PersonalData">Go Back</Link>
      </div>

      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <div className="labels">
          <p>Your Email and</p>
          <p>Password</p>
        </div>
        <div className="inputs">
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter your Email"
          />

          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter your password"
          />

          <input
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            placeholder="Confirm your password"
          />
        </div>
        <div className="button">
          <button type="button" onClick={add}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
