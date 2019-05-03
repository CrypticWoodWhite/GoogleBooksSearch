import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
// import { UL, LI } from "../components/UnorderedList";
// import IMG from "../components/IMG";
import A from "../components/A";
// import { SaveBtn } from "../components/Button";
import Footer from "../components/Footer";
// import "../css/normalize.css";
// import "../css/skeleton.css";
// import "../css/style.css";

class Search extends Component {

    state = {

    };

    componentDidMount () {

    };


    ////

    render () {
        return (
            <div>
                <Container>

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
                            <SearchForm>
                            </SearchForm>
                        </NavItem>

                    </Nav>

                    <br/>

                    <Row id="row-two">
                        <h4>Search results</h4>

                    </Row>

                </Container>

                <Footer></Footer>

            </div>
        )
    };

}

export default Search;