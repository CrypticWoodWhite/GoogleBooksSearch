import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
// import { UL, LI } from "../components/UnorderedList";
import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn, SearchBtn } from "../components/Button";
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

    // componentDidMount () {
    //     this.loadBooks();
    // };

    loadBooks = () => {

    };

    handleSearchClick = event => {
        event.preventDefault();

        API.searchBooks(this.state.search)
            .then(res => this.setState({
                books: res.data
            })).catch(err => console.log(err));
    };

    searchBooks = event => {
        const value = event.target.value;
        this.setState({
          search: value
        });
    };

    handleSaveBook = (event) => {
        event.preventDefault();
        API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis,
            image: this.state.image,
            link: this.state.link
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
                            onChange={ this.searchBooks }
                        >
                            <SearchBtn
                                onClick={ this.handleSearchClick }
                            >
                            </SearchBtn>
                        </SearchForm>
                    </NavItem>

                </Nav>

                <br/>

                <Row id="row-two-title">
                    <h4>Library</h4>
                </Row>

                <Row id="row-three-cards">

                    { this.state.books.length ? (
                            this.state.books.map(book => (
                            <Card>
                                <IMG
                                    alt={ book.title }
                                    src={ book.image }
                                    id={"img-" + book.title }
                                />
                                <A 
                                    className="book"
                                    href={ book.link }
                                >
                                    <strong>
                                        { book.title } by { book.author }
                                    </strong>
                                </A>
                                <p>{ book.synopsis }</p>
                                <SaveBtn
                                    id={"save-" + book.title }
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