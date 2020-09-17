const bodyParser = require('body-parser')
const cors = require('cors')

const jsonParser = bodyParser.json()

module.exports = (app) => {
    const bikes = require('../controllers/bike.controller.js');

    app.post('/', jsonParser, cors(), bikes.create);

    app.get('/', jsonParser, cors(), bikes.findAll);

    //app.update('/', jsonParser, bikes.update)

    app.delete('/', jsonParser, cors(), bikes.delete);
}