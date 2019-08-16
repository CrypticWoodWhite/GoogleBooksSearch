import React, { Component } from "react";
import { Row } from "../components/Grid";
import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn } from "../components/Button";
import { Cards, Card } from "../components/Card";
import API from "../utils/API";


class Books extends Component {

    handleSaveBook = event => {

        const newSvdId = event.target.id;

        // console.log("this.props.savedId: ", this.props.savedId);
        // console.log("isArray: ", Array.isArray(this.props.savedId));

        this.props.savedId.push(newSvdId);

        const book = {
            title: event.target.dataset.title,
            author: event.target.dataset.author,
            synopsis: event.target.dataset.synopsis,
            image: event.target.dataset.image,
            link: event.target.dataset.link
        };

        // console.log("this.props.savedBooks: ", this.props.savedBooks);
        // console.log("isArray: ", Array.isArray(this.props.savedBooks));
        // console.log("this.props.books: ", this.props.books);
        // console.log("isArray: ", Array.isArray(this.props.books));        

        this.props.savedBooks.push(book);

        API.saveBook(book)
            .then(res => {
                console.log("successful save");
            }).catch(err => console.log(err));
    };
    
    //////////////////////////////////////

    render () {

        return (
            <>
            <Row id="row-two-publiclibrary">
                <h4>Public Library</h4>
            </Row>

            <Row id="row-three-searchcards">

                { this.props.books.length ? (
                    <Cards>
                        { this.props.books.map((book, i) => (
                            <Card
                                key={ "card-" + i } 
                                opacity={ this.props.savedId.includes(book.volumeInfo.title + "-" + i) ? (0.5) : (1.0) }
                            >
                                <IMG
                                    alt={ book.volumeInfo.title }
                                    src={ book.volumeInfo.imageLinks ? ( book.volumeInfo.imageLinks.thumbnail ) : ("") }
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
                                    key={ "btn-" + i }
                                    id={ book.volumeInfo.title + "-" + i }
                                    onClick= { this.handleSaveBook }
                                    title={ book.volumeInfo.title }
                                    author={ book.volumeInfo.authors }
                                    synopsis={ book.volumeInfo.description }
                                    image={ book.volumeInfo.imageLinks ? ( book.volumeInfo.imageLinks.thumbnail ) : ("") }
                                    link={ book.volumeInfo.previewLink }
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
            </>
        )
    };

};

export default Books;