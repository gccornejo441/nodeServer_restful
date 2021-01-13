const express = require('express');
const bodyParser = require('body-parser');

const Bears = require('../app/models/bears')

const bearRouter = express.Router();

bearRouter.use(bodyParser.json());

bearRouter.route('/')
.get((req, res, next) => {
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    res.type('.html') // => 'text/html'
    res.send('<html><body><h1>You are currently at /bears</h1></body></html>');
      res.get('Content-Type');
})
.post((req, res) => {
    Bears.create(    );
});

module.exports = bearRouter;