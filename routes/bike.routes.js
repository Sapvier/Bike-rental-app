const bodyParser = require('body-parser')
const cors = require('cors')

const jsonParser = bodyParser.json()

module.exports = (app) => {
    const bikes = require('../controllers/bike.controller.js');
    const rentedBikes = require('../controllers/rentedBike.controller.js');

    app.post('/', jsonParser, cors(), bikes.create);
    app.post('/:id', jsonParser, cors(), rentedBikes.create);

    app.get('/', jsonParser, cors(), bikes.findAll);
    app.get('/rented', jsonParser, cors(), rentedBikes.findAll);

    app.delete('/:id', jsonParser, cors(), bikes.delete);
    app.delete('/rented/:id', jsonParser, cors(), rentedBikes.delete);
}