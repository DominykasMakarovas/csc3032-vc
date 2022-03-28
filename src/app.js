const express = require('express');
const app = express();

const url = "http://127.0.0.1:";
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on Port ${url}${port}`);
});


app.get('/', (_req, res) => {
    res.sendStatus(200);
});