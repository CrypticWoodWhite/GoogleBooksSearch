import React from "react";

const SearchForm = ({ onChange, children }) => {
    return (
        <form id="search-form">
            <input type="search" id="search-form" placeholder="I want to read..." onChange={ onChange }>
            </input>
            {children}
        </form>
    );
}

export default SearchForm;