const express = require('express');
const bodyParser = require('body-parser');

const bearRouter = express.Router();

bearRouter.use(bodyParser.json());

bearRouter.route('/')
.get((err, req, res, next) => {
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    res.format({
        'text/plain': function () {
          res.send('hey')
        },
      
        'text/html': function () {
          res.send('<p>hey</p>')
        },
      
        'application/json': function () {
          res.send({ message: 'hey' })
        },
      
        default: function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
      });
      res.get('Content-Type');
});

module.exports = bearRouter;