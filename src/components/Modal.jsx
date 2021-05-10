import React from "react";
import ReactDom from "react-dom";

const Modal = ({ children, title }) => {
    const root = document.createElement("div");

    React.useLayoutEffect(() => {
        return () => {
            document.removeChild(root);
        };
    }, [root]);
    return ReactDom.createPortal(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">{title}</div>
                <div>{children}</div>
            </div>
        </div>,
        root
    );
};

export default Modal;
