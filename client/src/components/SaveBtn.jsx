import React from "react";

const SaveBtn = ({ children, id }) => {
    return (
        <button className="button save" type="button" id={id} >
            {children}
        </button>
    );
}

export default SaveBtn;