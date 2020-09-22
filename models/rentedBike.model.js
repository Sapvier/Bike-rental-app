const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: String, required: true},
    rented: {type: Boolean, required: true}
})

module.exports = model('rentedBike', schema)