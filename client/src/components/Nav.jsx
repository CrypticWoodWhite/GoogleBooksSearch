import React from "react";
import { Container } from "./Grid";
import { UL } from "./UnorderedList";

export function Nav( {children} ) {
    return (
        <nav className="navbar">
            <Container>
                <UL className="navbar-list">
                    {children}
                </UL>
            </Container>
        </nav>
    );
};

export function NavItem({ children, id }) {
    return (
        <li className="navbar-item" id={id}>
            {children}
        </li>
    );
};