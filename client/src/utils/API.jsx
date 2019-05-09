import axios from "axios";

export default {
    searchBooks: function(searchTerms) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms + "&maxResults=40");
    },
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
