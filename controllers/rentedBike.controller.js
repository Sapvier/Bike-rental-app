const RentedBike = require('../models/rentedBike.model');

exports.create = (req, res) => {
    const rentedBike = new RentedBike({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rented: req.body.rented
    });
    rentedBike.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while adding the Bike."
        });
    });
};

exports.findAll = (req, res) => {
    RentedBike.find()
        .then(bikes => {
            res.send(bikes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while getting available bikes list."
        });
    });
};


exports.delete = (req, res) => {
    RentedBike.findByIdAndRemove(req.params.id)
        .then(bike => {
            if(!bike) {
                return res.status(404).send({
                    message: "No such bike with this id " + req.params.id
                });
            }
            console.log(req.params.id)
            res.send({message: "Bike has been deleted successfully!"});
        });
};