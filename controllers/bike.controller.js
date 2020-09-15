const Bike = require('../models/bike.model.js');

exports.create = (req, res) => {
    const bike = new Bike({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        time: req.body.time
    });
    bike.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while adding the Bike."
        });
    });
};

exports.findAll = (req, res) => {
    Bike.find()
        .then(bikes => {
            res.send(bikes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while getting available bikes list."
        });
    });
};

exports.delete = (req, res) => {
    Bike.findByIdAndRemove(req.params.id)
        .then(bike => {
            if(!bike) {
                return res.status(404).send({
                    message: "No such bike with this id " + req.params.id
                });
            }
            res.send({message: "Bike has been deleted successfully!"});
    });
};