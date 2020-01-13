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
    // TODO: Add date in schemas
    let poster = req.body.poster;
    let title = req.body.title;
    let body = req.body.body;
    let email = req.body.email;
    console.log(poster + " " + title + " " + body+ " " +  email);
    if (!poster || !title || !body || !email){
        res.status(402);
        res.send("Missing param(s)");
        return;
    }

    // TODO: Check valid email
    let sqlPoster= "INSERT INTO Posters (posterName, posterEmail) VALUES (?, ?);";
    await con.query(sqlPoster, [poster, email],  (err, result) => {
        if (err) {
            res.status(402);
            res.send();
        };
    });

    let sqlPost = "INSERT INTO Posts (posterEmail, title, body) VALUES (?, ?, ?);";
    await con.query(sqlPost, [email, title, body], (err, result) => {
        if(err){
            res.status(402);
            res.send();
        } 
    });

    res.status(200);
    res.send();

});


