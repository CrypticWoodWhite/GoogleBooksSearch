import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import {Container, Row, Column} from "../components/Grid";
import Footer from "../components/Footer";
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

    componentDidMount () {
        this.getSavedBooks();
    };

    // getSavedBooks = () => {
    //     API.getSavedBooks()
    //         .then(
    //             res => this.setState({books: res.data})
    //         ).catch(
    //             err => console.log(err);
    //         )
    // }


    ////

    render () {
        return (
            <div>
            <Container>

                <Header>
                    <h1 className="title">Google Books Search</h1>
                    <h5>Saved books</h5>
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

export default Saved;