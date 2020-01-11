const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const SECRETS = require('./secrets.json');

app.use(cors());
app.use(bodyParser());

/* SET UP CONNECTION */
let con = mysql.createConnection({
    host: "localhost",
    user: SECRETS.DB.USER,
    password: SECRETS.DB.PASSWORD
});

con.connect(err => {
    if(err){
        throw err;
    }
});

con.changeUser({database: "web"}, (err) => {
    if (err) throw err;
});

app.listen(8080);


/* ROUTES */
app.get('/ping', (req, res) => {
    res.json({response: "pong"});
});

app.get('/posts', async (req, res) => {
    const sql = "SELECT * FROM Posts;";
    await con.query(sql, (err, result) => {
        res.send(err || result);
    });
});

app.post('/posts', async (req, res) => {
    console.log(req.body);
});


