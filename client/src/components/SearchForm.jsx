import React from "react";
import { SearchBtn } from "../components/Button";

const SearchForm = ({ onSubmit, value, onChange }) => {
    return (
        <form id="search-form" onSubmit={onSubmit}>
            <input type="search" id="search-form" placeholder="I want to read..." value={ value } onChange={ onChange }>
            </input>
            <SearchBtn></SearchBtn>
        </form>
    );
}

export default SearchForm;