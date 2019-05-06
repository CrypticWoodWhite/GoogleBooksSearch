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
import Books from "./Books";


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

                <Books 
                    books={ this.state.books }
                    search ={ this.state.search }
                    {...this.state}
                />

                <Footer></Footer>
            </Container>



        )
    };

}

export default Search;