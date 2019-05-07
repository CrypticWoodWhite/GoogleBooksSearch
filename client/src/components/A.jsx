import React from "react";

const A = ({ className, onClick, children }) => {
    return (
        <a className={ className } onClick={ onClick } href="/" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default A;