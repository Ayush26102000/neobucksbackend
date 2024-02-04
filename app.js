const express = require('express'); 
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express(); 
app.use(bodyParser.json());

const PORT = 3000; 
app.use(cors());
cors({ credentials: true, origin: true })

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QazWsxEdc@1092',
    database: 'expense',
});


db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

 
app.listen(PORT, (error) =>{ 
    if(!error) 
    console.log(`Server is running at http://localhost:${PORT}`);
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 


app.post('/SaveName', (req, res) => {
    const requestBody = req.body;
    const name = requestBody.body;

    const sql = 'INSERT INTO Users (name) VALUES (?)';

    db.query(sql, [name], (err, result) => {
        if (err) {
            res.status(500).json({ status: 'Error inserting into the database' });
        } else {
            res.json({ status: 1 });
        }
    });
});
