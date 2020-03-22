const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const InitialMongoServer = require('./config/db');

// Initiate Mongo Server
InitialMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

//MiddleWare
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "API Working"});
});

app.use('/user', user);

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
});