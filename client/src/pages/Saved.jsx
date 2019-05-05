import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import IMG from "../components/IMG";
import A from "../components/A";
import { SearchBtn, DeleteBtn } from "../components/Button";
import Footer from "../components/Footer";
import Card from "../components/Card";
import API from "../utils/API";

class Saved extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.getSavedBooks();
    };

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({
                books: res.data
            })).catch(err => console.log(err)
            );
    }


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

                <Row id="row-two-saved">
                    <h4>Your reading list</h4>
                </Row>

                <Row id="row-three-savedcards">

                </Row>

                <Footer></Footer>

            </Container>


        )
    };

}

export default Saved;