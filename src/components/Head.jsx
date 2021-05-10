import React from "react";
import ReactDom from "react-dom";

const Head = ({ children }) => {
    return ReactDom.createPortal(
        <>
            {children}
        </>,
        document.querySelector("head")
    );
};

export default Head;
