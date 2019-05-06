import React, { Component } from "react";
import { Row } from "../components/Grid";
import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn } from "../components/Button";
import { Cards, Card } from "../components/Card";
import API from "../utils/API";


class Books extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        search: ""
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = event => {

    };

    handleSaveBook = event => {
        event.preventDefault();

        API.saveBook({
            title: this.state.books.volumeInfo.title,
            author: this.state.books.volumeInfo.authors,
            synopsis: this.state.books.volumeInfo.description,
            image: this.state.books.volumeInfo.imageLinks.thumbnail,
            link: this.state.books.volumeInfo.previewLink
        }).then(res => console.log("res of save: " + res)
        ).catch(err => console.log(err));


    };
    

    ////

    render () {
        return (

            <Row id="row-three-searchcards">

                { this.state.books.length ? (
                    <Cards>
                        {this.state.books.map(book => (
                            <Card id={"card-" + book.volumeInfo.title}>
                                <IMG
                                    alt={ book.volumeInfo.title }
                                    src={ book.volumeInfo.imageLinks.thumbnail }
                                    id={"img-" + book.volumeInfo.title }
                                />
                                <A 
                                    className="book"
                                    href={ book.volumeInfo.previewLink }
                                >
                                    <strong><i>{ book.volumeInfo.title }</i></strong> by { book.volumeInfo.authors }
                                </A>
                                <br/>
                                <br/>
                                <p>{ book.volumeInfo.description }</p>
                                <SaveBtn
                                    id={"save-" + book.volumeInfo.title }
                                    onClick= { this.handleSaveBook }
                                >
                                    Save
                                </SaveBtn>
                            </Card>
                        ))}
                    </Cards>
                ) : (
                    <h5>No books to display, try a new search.</h5>
                )}

            </Row>

        )
    };

}

export default Books;