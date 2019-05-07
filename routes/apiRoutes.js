const router = require("express").Router();
const controller = require("../controllers/booksController");

// "/api/books"
// router.route("/");
router.get("/", controller.findAll);
router.post("/", controller.save);

// "/api/books/:id"
// router.route("/:id");
router.get("/:id", controller.findById);
router.delete("/:id", controller.remove);

// router.route("*");

module.exports = routes;
