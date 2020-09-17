const Bike = require('../models/bike.model.js');

exports.create = (req, res) => {
    const bike = new Bike({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
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

exports.update = (req, res) => {
    Bike.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
    }, {rented: true})
        .then(bike => {
            if(!bike) {
                return res.status(404).send({
                    message: "Bike is not found with id " + req.params.id
                });
            }
            res.send(bike);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Bike is not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating bike with id " + req.params.id
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
    Bike.findByIdAndRemove(req.data.id)
        .then(bike => {
            if(!bike) {
                return res.status(404).send({
                    message: "No such bike with this id " + req.data.id
                });
            }
            res.send({message: "Bike has been deleted successfully!"});
    });
};