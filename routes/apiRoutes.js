const router = require("express").Router();
const controller = require("../controllers/booksController");

// "/api/books"
// router.route("/");
router.get("/api/books", controller.findAll);
router.post("/api/books", controller.save);

// "/api/books/:id"
// router.route("/:id");
router.get("/api/books/:id", controller.findById);
router.delete("/api/books/:id", controller.remove);

module.exports = router;
