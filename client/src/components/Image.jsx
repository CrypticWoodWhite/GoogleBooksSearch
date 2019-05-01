import React from "react";

const Image = ({ alt, src, idString }) => {
    return (
        <img alt={alt} src={src} id={idString} />
    );
};

export default Image;