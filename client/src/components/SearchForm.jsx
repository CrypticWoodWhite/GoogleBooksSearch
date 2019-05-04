import React from "react";

const SearchForm = ({ children }) => {
    return (
        <form id="search-form">
            <input type="search" id="search-form" placeholder="I want to read...">
            </input>
            {children}
        </form>
    );
}

export default SearchForm;