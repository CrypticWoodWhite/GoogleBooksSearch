import React from "react";

const NavItem = ({ href, children }) => {
    return (
        <li className="navbar-item">
            <a className="navbar-link" href={href}>
                {children}
            </a>
        </li>
    );
}

export default NavItem;