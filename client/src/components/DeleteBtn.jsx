import React from "react";

const DeleteBtn = ({ children, id }) => {
    return (
        <button className="button delete" type="button" id={id} >
            {children}
        </button>
    );
}

export default DeleteBtn;