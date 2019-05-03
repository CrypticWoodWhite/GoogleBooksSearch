import React from "react";
import Row from "./Grid";

const SearchForm = () => {
    return (
        <form>
            <Row id="search-row">
                <input className="u-full-width" type="text" id="search-form" placeholder="Search Google Books for...">
                </input>
                <button className="button primary-button" type="submit" id="submit" >
                    Search
                </button>
            </Row>
        </form>
    );
}

export default SearchForm;