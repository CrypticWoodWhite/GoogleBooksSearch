import React from "react";

export function UL( { className, children } ) {
    return (
        <ul className={className}>
            {children}
        </ul>
    );
}

export function LI({ className, children }) {
    return (
        <li className={className}>
            {children}
        </li>
    );
}