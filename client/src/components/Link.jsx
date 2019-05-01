import React from "react";

const Link = ({ href, children }) => {
    return (
        <a href={href} target="_blank">
            {children}
        </a>
    );
}

export default Link;