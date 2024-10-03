const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// process.env.PORT - for port on server if we deploy it, and port 3000 on local machine
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// To avoid running into cross-origin resource sharing or pause issues:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.listen(port, () => console.log(`Listening on port ${port}`));
