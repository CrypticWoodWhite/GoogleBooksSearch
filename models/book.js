const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    synopsis:  {
        type: String,
        required: true
    },
    image: {
        type: Mixed,
        required: true
    },
    link: {
        type: Mixed,
        required: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
