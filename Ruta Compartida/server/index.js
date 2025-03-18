const express = require ("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ravencar"
});

app.post("/personalData", (req, res)=>{
    const name = req.body.name;
    const lastName = req.body.lastName;
    const secondLastName = req.body.secondLastName;
    const studentId = req.body.studentId;
    const phoneNumber = req.body.phoneNumber;
    const role = req.body.role;

    db.query('INSERT INTO personalData(name, lastName, secondLastName, studentId, phoneNumber, role) VALUES(?,?,?,?,?,?)',
        [name, lastName, secondLastName, studentId, phoneNumber, role],
        (error, result)=>{
            if (error) {
                console.log(error);
            }else{
                res.status(200).json({personalData:{num: result.insertId}});
            }
        }
    );
});


app.post("/accountDetail", (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const personalData = req.body.personalData;


    db.query('INSERT INTO accountDetail(email, pwd, personalData) VALUES(?,?,?)',
        [email, password, personalData],
        (error, result)=>{
            if (error) {
                console.log(error);
            }else{
                res.send("Registrando datos...")
            }
        }
    );
});

app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const query = 'SELECT pd.role FROM accountDetail ad JOIN personalData pd ON ad.personalData = pd.num WHERE ad.email = ? AND ad.pwd = ?';

    db.query(query, [email, password], 
        (error, result) =>{
        if (error) {
            console.log(error)
        }
        if (result.length > 0) {
            res.json({role:result[0].role});
        }
        
    })
})

//Crear un ruta



app.listen(3001, ()=>{
    console.log("Host prendido en puerto 3001")
})