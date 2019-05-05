import React from "react";

export function Container({ children, id }) {
    return(
        <div className="container" id={id}>
            {children}
        </div>
    );
};

export function Row({ id, children }) {
    return (
        <section className="row" id={id}>
            {children}
        </section>
    );
};

export function Column({ number, id, children }) {
    return (
        <section className={number} id={id}>
            {children}
        </section>
    );
};