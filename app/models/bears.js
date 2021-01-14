const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BearSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Bears = mongoose.model('Bears', BearSchema, 'bears');

module.exports = Bears;