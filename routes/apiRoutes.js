const router = require("express").Router();
const controller = require("../controllers/booksController");

// "/api/books"
router.route("/")
    .get(controller.findAll)
    .post(controller.save);

// "/api/books/:id"
router.route("/:id")
    .get(controller.findById)
    .delete(controller.remove);

// router.route("*");

module.exports = routes;
