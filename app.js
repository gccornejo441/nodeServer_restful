const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routes/index');
const bearRouter = require('./routes/bearRouter');

// sets out port
const port = process.env.PORT || 3000;

// get an instance of the express router
app.use('/api', router);
app.use('/api/bears', bearRouter);

app.use('/', (req, res) => {
    res.statusCode = 200;
    res.send('<html><body><h1>You are currently at the root location</h1></body></html>');
});

// all of our routes will be prefixed with /api

app.use((req, res, next) => {
    res.send(`<html><body><h1>You are at <br> ${__dirname}</h1></body></html>`);
})

// Start server
app.listen(port)