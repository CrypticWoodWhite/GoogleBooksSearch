import React from "react";
import { SearchBtn } from "./Button";

const SearchForm = () => {
    return (
        <form id="search-form">
            <input type="search" id="search-form" placeholder="I want to read...">
            </input>
            <SearchBtn></SearchBtn>
        </form>
    );
}

export default SearchForm;