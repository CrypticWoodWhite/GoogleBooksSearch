import React from "react";

export function DeleteBtn ({ children, id }) {
    return (
        <button className="button delete" type="button" id={id} >
            {children}
        </button>
    );
};

export function ViewBtn ({ children, id }) {
    return (
        <button className="button view" type="button" id={id} >
            {children}
        </button>
    );
};

export function SaveBtn ({ children, id }) {
    return (
        <button className="button save" type="button" id={id} >
            {children}
        </button>
    );
};

export function SearchBtn () {
    return (
        <button className="button button-primary" type="submit" id="submit">
            <i class="fa fa-search"></i>
        </button>
    );
};