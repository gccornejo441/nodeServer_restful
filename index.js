const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Bears = require('./app/models/bears')

// sets out port
const port = process.env.PORT || 3000;

// get an instance of the express router
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hooray! Welcome to our API!' });
});

// all of our routes will be prefixed with /api
app.use('/api', router);
app.use((req, res, next) => {
    res.send(`<html><body><h1>You are at <br> ${__dirname}</h1></body></html>`);
})

// Start server
app.listen(port)
console.log(`Example app listening at http://localhost:${port}`); 

