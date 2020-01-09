const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log("API running on : " + port ));

app.get('/api/repos', (req, res) => {
    console.log("req got");
    res.send("Why hello there!");
});
