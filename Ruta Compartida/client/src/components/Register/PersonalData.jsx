import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


const PersonalData = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [secondLastName, setSecondLastName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");

    const add = () => {

    //Validacion de que solo acepta letras en nombre y apellidos
    if (!name) {
        alert("Name cannot be empty");
        return;
    } else {
        const validateName = /^[a-zA-Z]+$/;
        if (!validateName.test(name)) {
            alert("The name must only contain letters");
            return;
        }
    }

    if (!lastName) {
        alert("Last name cannot be empty");
        return;
    } else {
        const validateLastName = /^[a-zA-Z]+$/;
        if (!validateLastName.test(lastName)) { 
            alert("The last name must only contain letters");
            return;
        }
    }

    if (!secondLastName) {
        alert("Second last name cannot be empty");
        return;
    } else {
        const validateSecondLastName = /^[a-zA-Z]+$/;
        if (!validateSecondLastName.test(secondLastName)) { 
            alert("The second last name must only contain letters");
            return;
        }
    }

    //Validacion de que solo acepte caracteres numericos y 10 en matricula y numero celular
    if (!studentId) {
        alert("Student ID cannot be empty");
        return;
    } else {
        const validateStudentId = /^\d{10}$/; 
        if (!validateStudentId.test(studentId)) {
            alert("Please enter exactly 10 digits (only numbers)");
            return;
        }
    }

    if (!phoneNumber) {
        alert("Phone number cannot be empty");
        return;
    } else {
        const validatePhoneNumber = /^\d{10}$/;
        if (!validatePhoneNumber.test(phoneNumber)) {
            alert("Please enter exactly 10 digits (only numbers)");
            return;
        }
    }

    //Si pasa las validaciones, se realiza el post(inserto) en la tabla de nuestro host
    Axios.post("http://localhost:3001/personalData", {
    name:name,
    lastName:lastName,
    secondLastName:secondLastName,
    studentId:studentId,
    phoneNumber:phoneNumber,
    role:role
    }).then((response) => {
        const num = response.data.personalData.num;
        sessionStorage.setItem("personalData", num);

        sessionStorage.setItem("studentId", studentId)
        alert("Registrando...");
        navigate("/Register/AccountDetails"); 
    });
};

    return (
        <div className="container">
            <div className="return-button">
                <Link to="/">Go Back</Link>
            </div>
            <form className="form" onSubmit={(event) => event.preventDefault()}>
                <div className="labels">
                    <p>Your Personal</p>
                    <p>Information</p>
                </div>
                <div className="inputs">
                    <input
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        onChange={(event) => setLastName(event.target.value)}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        onChange={(event) => setSecondLastName(event.target.value)}
                        type="text"
                        placeholder="Second Last Name"
                    />
                    <input
                        onChange={(event) => setStudentId(event.target.value)}
                        type="text"
                        placeholder="Student ID"
                    />
                    <input
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        type="text"
                        placeholder="Phone Number"
                    />
                </div>

                <div className="select-rol">
                    <p>Select Role</p>
                    <select value={role} onChange={(event) => setRole(event.target.value)}>
                        <option value="">Select a role</option>
                        <option value="DRIVE">Driver</option>
                        <option value="PASSE">Passenger</option>
                    </select>
                </div>

                <div className="button">
                    <button type="button" onClick={add}>Continue</button>
                </div>
            </form>
        </div>
    );
};

export default PersonalData;
