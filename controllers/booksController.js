const db = require("../models/book");

module.exports = {
    findAll: function(res) {
        db.Book.findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        console.log("save!", res);
        db.Book.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Book.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
