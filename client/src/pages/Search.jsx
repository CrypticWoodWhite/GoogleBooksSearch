import React, { Component } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import {Container, Row, Column} from "../components/Grid";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";
import Image from "../components/Image";
import Link from "../components/Link";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import Footer from "../components/Footer";

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
                    <h5>Search for new books</h5>
                </Header>

                <Nav>
                </Nav>

                <Row id="row-one">
                </Row>

            </Container>

            <Footer></Footer>

            </div>
        )
    };

}

export default Search;