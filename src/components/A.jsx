import React from "react";

const A = ({ className, onClick, href, children }) => {
    return (
        <a className={ className } onClick={ onClick } href={ href } rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default A;