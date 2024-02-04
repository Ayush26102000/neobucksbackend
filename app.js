const express = require('express'); 
const mysql = require('mysql');
const cors = require('cors');

const app = express(); 
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
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 


app.post('/CreateUser', (req, res) => {
    console.log(req.body);
    
    res.json({requestBody: req.body});
});
