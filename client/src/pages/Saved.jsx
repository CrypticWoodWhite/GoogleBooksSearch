import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import IMG from "../components/IMG";
import A from "../components/A";
import { SearchBtn, DeleteBtn } from "../components/Button";
import Footer from "../components/Footer";
import { Card, Cards } from "../components/Card";
import API from "../utils/API";

class Saved extends Component {

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
        this.getSavedBooks();
    };

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({
                books: res.data.items
            })).catch(err => console.log(err));
    };

    // handleDelete = id => {
    //     API.deleteBook(id)
    //         .then(res => console.log("delete res: " + res))
    //         .catch(err => console.log(err));
    // };


    ////

    render () {
        return (

            <Row id="row-three-savedcards">

                { this.props.books.length ? (
                    <Cards>
                        { this.props.books.map(book => (
                            <Card
                                id={ "card-" + book.volumeInfo.previewLink }
                                key={ "card-" + book.volumeInfo.previewLink }
                            >
                                <IMG
                                    alt={ book.volumeInfo.title }
                                    src={ book.volumeInfo.imageLinks ? ( book.volumeInfo.imageLinks.thumbnail ) : ("") }
                                    id={ "img-" + book.volumeInfo.previewLink }
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
                                <DeleteBtn
                                    id={ "save-" + book.volumeInfo.previewLink }
                                    key={ "save-" + book.volumeInfo.previewLink }
                                    onClick= { this.handleSaveBook }
                                    title={ book.volumeInfo.title }
                                    author={ book.volumeInfo.authors }
                                    synopsis={ book.volumeInfo.description }
                                    image={ book.volumeInfo.imageLinks ? ( book.volumeInfo.imageLinks.thumbnail ) : ("") }
                                    link={ book.volumeInfo.previewLink }
                                >
                                    Delete
                                </DeleteBtn>
                            </Card>
                        ))}
                    </Cards>
                ) : (
                    <h5>No saved books, try a new search to find books to save.</h5>
                )}

            </Row>

        );

}

export default Saved;