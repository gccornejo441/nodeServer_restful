const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BearSchema = new Schema({
    name: {
        type: String
    }
});

const Bears = mongoose.model('Bears', BearSchema);

module.exports = Bears;