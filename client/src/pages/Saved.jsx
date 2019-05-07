import React, { Component } from "react";
import { Row } from "../components/Grid";
import IMG from "../components/IMG";
import A from "../components/A";
import { DeleteBtn } from "../components/Button";
import { Card, Cards } from "../components/Card";
import API from "../utils/API";

class Saved extends Component {

    state = {
        savedBooks: []
    };

    handleDelete = event => {
        event.preventDefault();
        
        const deleteThis = event.target.id;

        console.log("book id to be deleted: " + deleteThis);
        API.deleteBook(deleteThis)
            .then(res => console.log("delete res: " + res))
            .catch(err => console.log(err));

        API.getSavedBooks()            
            .then(res => {
                this.setState({
                    savedBooks: res.data
                });
            });          
    };


    ////

    render () {
        return (
            <>
            <Row id="row-two-yourlibrary">
                <h4>Your Library</h4>
            </Row>

            <Row id="row-three-savedcards">

                { this.props.savedBooks.length ? (
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
                                    onClick= { this.handleDelete }
                                    id={ savedBook._id }
                                    title={ savedBook.title }
                                    author={ savedBook.author }
                                    synopsis={ savedBook.synopsis }
                                    image={ savedBook.image ? ( savedBook.image ) : ("") }
                                    link={ savedBook.link }
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