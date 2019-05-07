import React, { Component } from "react";
import { Row } from "../components/Grid";
import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn } from "../components/Button";
import { Cards, Card } from "../components/Card";
import API from "../utils/API";


class Books extends Component {

    handleSaveBook = event => {
        event.preventDefault();

        const book = {
            title: event.target.dataset.title,
            author: event.target.dataset.author,
            synopsis: event.target.dataset.synopsis,
            image: event.target.dataset.image,
            link: event.target.dataset.link
        };

        console.log("save this book: " + book.title);
        
        API.saveBook( book )
            .then(res => console.log("res of save: " + res))
            .catch(err => console.log(err));
    };
    
    //////////////////////////////////////

    render () {

        return (

            <Row id="row-three-searchcards">

                { this.props.books.length ? (
                    <Cards>
                        { this.props.books.map(book => (
                            <Card
                                key={ "card-" + book.volumeInfo.previewLink }
                            >
                                <IMG
                                    alt={ book.volumeInfo.title }
                                    src={ book.volumeInfo.imageLinks ? ( book.volumeInfo.imageLinks.thumbnail ) : ("") }
                                    key={ "img-" + book.volumeInfo.previewLink }
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
                                    key={ "save-" + book.volumeInfo.previewLink }
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

        )
    };

}

export default Books;