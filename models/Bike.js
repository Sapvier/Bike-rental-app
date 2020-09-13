const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required: true},
    time: {type: Date, required: true}
})

module.exports = model('Bike', schema)