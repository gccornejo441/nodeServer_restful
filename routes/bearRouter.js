const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Bears = require('../app/models/bears')

const bearRouter = express.Router();

bearRouter.use(bodyParser.json());

bearRouter.route('/')
.get((req, res, next) => {
    Bears.find({}).exec((err, doc) => {
        if (doc != null) {
            console.log('Bear round: ', doc);
            res.json(doc)
        } else {
            err = Error(`${doc} not found`);
            err.status = 404;
            next(err)
        }
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        // res.json(res)
    })
})
.post((req, res, next) => {
    Bears.create(req.body)
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = bearRouter;