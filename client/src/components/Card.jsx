import React from "react";

export function Cards({ children }) {
    return (
        <section className="cards-container">
            {children}
        </section>
    );
};

export function Card({ children }) {
    return (
        <section className="card">
            {children}
        </section>
    );
};