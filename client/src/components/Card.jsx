import React from "react";

export function Cards({ children }) {
    return (
        <section className="cards-container">
            {children}
        </section>
    );
};

export function Card({ id, children }) {
    return (
        <section className="card" id={ id }>
            {children}
        </section>
    );
};