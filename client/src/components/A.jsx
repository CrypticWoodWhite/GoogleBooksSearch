import React from "react";

const A = ({ className, href, children }) => {
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default A;