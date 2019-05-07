import React from "react";

export function Cards({ children }) {
    return (
        <section className="cards-container">
            {children}
        </section>
    );
};

export function Card({ opacity, children }) {
    return (
        <section className="card" style={{opacity: opacity}}>
            {children}
        </section>
    );
};