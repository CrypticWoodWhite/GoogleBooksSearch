import React from "react";

export function DeleteBtn ({ children, id, onClick }) {
    return (
        <button className="button button-primary delete" type="button" id={id} onClick={onClick} >
            {children}
        </button>
    );
};

export function ViewBtn ({ children, id, onClick }) {
    return (
        <button className="button view" type="button" id={id} onClick={onClick} >
            {children}
        </button>
    );
};

export function SaveBtn ({ children, id, onClick, title, author, synopsis, image, link }) {
    return (
        <button
            className="button button-primary save"
            type="button"
            id={id}
            onClick={onClick}
            data-title={title}
            data-author={author}
            data-synopsis={synopsis}
            data-image={image}
            data-link={link}
        >
            {children}
        </button>
    );
};

export function SearchBtn () {
    return (
        <button className="button button-primary" type="submit" id="submit">
            <i className="fa fa-search"></i>
        </button>
    );
};