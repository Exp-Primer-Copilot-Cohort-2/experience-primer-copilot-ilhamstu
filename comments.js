// Create web server
const express = require('express');
const app = express();

// Create a port
const port = 3000;

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});