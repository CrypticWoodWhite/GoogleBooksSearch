import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import A from "../components/A";
import Footer from "../components/Footer";
import API from "../utils/API";
import Books from "./Books";
import Saved from "./Saved";


class Search extends Component {

    state = {
        books: [],
        savedBooks: [],
        savedId: [],
        title: "",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        search: "",
        savedPage: false
    };

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                });
            }).catch(err => console.log(err));
    };

    componentDidMount() {
        // this.getSavedBooks();
        // console.log("state isarray books: " + Array.isArray(this.state.books));
        // console.log("state isarray savedbooks: " + Array.isArray(this.state.savedBooks));
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

    onClickHome = event => {
        event.preventDefault();
        this.setState({
            savedPage: false
        });
    };

    onClickSaved = event => {
        event.preventDefault();
        this.setState({
            savedPage: true
        });
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
                        <A
                            className="navbar-link"
                            onClick={ this.onClickHome }
                        >
                            Home
                        </A>
                    </NavItem>

                    <NavItem id="nav-saved">
                        <A
                            className="navbar-link"
                            onClick={ this.onClickSaved }
                        >
                            Saved books
                        </A>
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

                { !this.state.savedPage && <Books
                    { ...this.state }
                /> }
                { this.state.savedPage && <Saved
                    { ...this.state }
                    /* getSvdBks={ this.getSavedBooks } */
                /> }

                <Footer></Footer>
            </Container>

        )
    };

}

export default Search;