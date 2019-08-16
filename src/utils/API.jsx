import axios from "axios";

export default {
    searchBooks: searchTerms => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms + "&maxResults=40");
    },
    getSavedBooks: () => {
        return axios.get("/api/books");
    },
    saveBook: bookData => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: id => {
        return axios.delete("/api/books/" + id);
    }
};
