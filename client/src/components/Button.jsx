import React from "react";

export function DeleteBtn ({ children, id, onClick }) {
    return (
        <button className="button delete" type="button" id={id} onClick={onClick} >
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

export function SaveBtn ({ children, id, onClick }) {
    return (
        <button className="button save" type="button" id={id} onClick={onClick} >
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