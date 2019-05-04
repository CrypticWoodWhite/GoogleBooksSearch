import React, { Component } from "react";
import Header from "../components/Header";
import { Nav, NavItem } from "../components/Nav";
import { Container, Row, Column } from "../components/Grid";
import SearchForm from "../components/SearchForm";
// import { UL, LI } from "../components/UnorderedList";
// import IMG from "../components/IMG";
import A from "../components/A";
import { SaveBtn, SearchBtn } from "../components/Button";
import Footer from "../components/Footer";
// import Card from "../components/Card";
import API from "../utils/API";

class Search extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        image: "",
        link: ""
    };

    componentDidMount () {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks({req.params})
            .then(res => this.setState({
                books: res.data
            })).catch(err => console.log(err));
    };

    saveBook = (event) => {
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
                                <SearchBtn
                                    onClick={ this.loadBooks }
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
                        <Column number="four columns" id="col-one-library">
                        
                        </Column>
                        <Column number="four columns" id="col-two-library">
                        
                        </Column>
                        <Column number="four columns" id="col-three-library">
                        
                        </Column>
                    </Row>

                </Container>

                <Footer></Footer>

            </div>
        )
    };

}

export default Search;