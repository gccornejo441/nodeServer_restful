const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// get an instance of the express router
const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('<html><body><h1>You are currently at /api/ </h1></body></html>');
});

app.use((req, res, next) => {
    res.send(`<html><body><h1>You are at <br> ${__dirname}</h1></body></html>`);
});

module.exports = router;
