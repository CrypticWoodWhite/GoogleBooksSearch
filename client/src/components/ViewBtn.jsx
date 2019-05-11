import React from "react";

const ViewBtn = ({ children, id }) => {
    return (
        <button className="button view" type="button" id={id} >
            {children}
        </button>
    );
}

export default ViewBtn;