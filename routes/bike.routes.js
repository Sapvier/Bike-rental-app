module.exports = (app) => {
    const bikes = require('../controllers/bike.controller.js');

    app.post('/', bikes.create);

    app.get('/', bikes.findAll);

    app.delete('/', bikes.delete);
}