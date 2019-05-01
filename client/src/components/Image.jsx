import React from "react";

const Image = ({ alt, src, id }) => {
    return (
        <img alt={alt} src={src} id={id} />
    );
};

export default Image;