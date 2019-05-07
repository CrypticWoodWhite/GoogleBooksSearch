const db = require("../models/Book");
require("mongoose");

module.exports = {
    findAll: function(res) {
        db.findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
