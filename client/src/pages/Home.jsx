import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
// import { UL, LI } from "../components/UnorderedList";
import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn } from "../components/Button";
import Footer from "../components/Footer";
import Card from "../components/Card";
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

    // componentDidMount() {
    //     this.loadBooks();
    // };

    loadBooks = () => {
        console.log();
    };

    handleInputChange = event => {
        const searchTerms = event.target.value;
        this.setState({
          search: searchTerms
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        console.log("handleSearchSubmit: " + this.state.search);
        API.searchBooks(this.state.search)
            .then(res => {
                console.log("res: " + res);
                this.setState({
                    books: res.data
                })
                // this.loadBooks();
            }).catch(err => console.log(err));
    };

    handleSaveBook = (event) => {
        event.preventDefault();
        API.saveBook({
            title: this.state.books.items.volumeInfo.title,
            author: this.state.books.items.volumeInfo.authors,
            synopsis: this.state.books.items.volumeInfo.description,
            image: this.state.books.items.volumeInfo.imageLinks.thumbnail,
            link: this.state.books.items.volumeInfo.previewLink
        }).then(res => this.setState({
            books: res.data
        })).catch(err => console.log(err));
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
                            this.state.books.map(book => (
                            <Card>
                                <IMG
                                    alt={ book.items.volumeInfo.title }
                                    src={ book.items.volumeInfo.imageLinks.thumbnail }
                                    id={"img-" + book.items.volumeInfo.title }
                                />
                                <A 
                                    className="book"
                                    href={ book.items.volumeInfo.previewLink }
                                >
                                    <strong>
                                        { book.items.volumeInfo.title } by { book.items.volumeInfo.authors }
                                    </strong>
                                </A>
                                <p>{ book.items.volumeInfo.description }</p>
                                <SaveBtn
                                    id={"save-" + book.items.volumeInfo.title }
                                    onClick= { this.handleSaveBook }
                                >
                                    Save
                                </SaveBtn>
                            </Card>
                        ))
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