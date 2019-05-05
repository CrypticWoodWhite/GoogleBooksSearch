import axios from "axios";

export default {
    searchBooks: function(searchTerms) {
        return axios.get("/api/books", searchTerms);
    },
    getSavedBooks: function() {
        return axios.get("/api/savedbooks");
    },
    saveBook: function(bookData) {
        return axios.post("/api/savedbooks", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/savedbooks/" + id);
    }
};
