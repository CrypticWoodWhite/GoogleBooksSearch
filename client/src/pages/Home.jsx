import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn } from "../components/Button";
import Footer from "../components/Footer";
import { Cards, Card } from "../components/Card";
import API from "../utils/API";


class Search extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        search: ""
    };

    handleInputChange = event => {
        const searchTerms = event.target.value;
        this.setState({
            search: searchTerms
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();

        API.searchBooks(this.state.search)
            .then(res => {
                this.setState({
                    books: res.data.items
                });
            }).catch(err => console.log(err));
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
            <Container id="main">

                <Header>
                    <h1 className="title">Google Books Search</h1>
                    <h4>What's next on your reading list?</h4>
                </Header>

                <Nav>
                    <NavItem id="nav-home">
                        <A className="navbar-link" href="/">Home</A>
                    </NavItem>

                    <NavItem id="nav-saved">
                        <A className="navbar-link" href="/">Saved books</A>
                    </NavItem>
                    
                    <NavItem id="nav-search">
                        <SearchForm
                            onSubmit={ this.handleSearchSubmit }
                            value={ this.state.search }
                            onChange={ this.handleInputChange }
                        >
                        </SearchForm>
                    </NavItem>

                </Nav>

                <br/>

                <Row id="row-two-library">
                    <h4>Library</h4>
                </Row>

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
                
                <Footer></Footer>
            </Container>



        )
    };

}

export default Search;