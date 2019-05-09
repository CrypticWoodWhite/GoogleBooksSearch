import React, { Component } from "react";
import { Row } from "../components/Grid";
import IMG from "../components/IMG";
import A from "../components/A";
import { DeleteBtn } from "../components/Button";
import { Card, Cards } from "../components/Card";
import API from "../utils/API";

class Saved extends Component {

    componentDidMount() {
        this.getSavedBooks();
        // console.log("state isarray books: " + Array.isArray(this.state.books));
        // console.log("state isarray savedbooks: " + Array.isArray(this.state.savedBooks));
    };

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                });
            }).catch(err => console.log(err));
    };

    handleDelete = event => {
        event.preventDefault();
        
        const deleteThis = event.target.id;

        API.deleteBook(deleteThis)
            .then(res => {
                this.props.getSvdBks();
                console.log("successful delete");
            }).catch(err => console.log(err));                  
    };

    ////

    render () {
        return (
            <>
            <Row id="row-two-yourlibrary">
                <h4>Your Library</h4>
            </Row>

            <Row id="row-three-savedcards">

                { this.props.savedBooks.length > 0 ? (
                    <Cards>
                        { this.props.savedBooks.map((savedBook, i) => (
                            <Card key={ "card-" + i }>
                                <IMG
                                    alt={ savedBook.title }
                                    src={ savedBook.image ? ( savedBook.image ) : ("") }
                                    key={ "img-" + i }
                                />
                                <A 
                                    className="book"
                                    href={ savedBook.link }
                                >
                                    <strong><i>{ savedBook.title }</i></strong> by { savedBook.author }
                                </A>
                                <br/>
                                <br/>
                                <p>{ savedBook.synopsis }</p>
                                <DeleteBtn
                                    key={ "save-" + i }
                                    id={ savedBook._id }
                                    onClick= { this.handleDelete }
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
            </>
        );
    };
}

export default Saved;