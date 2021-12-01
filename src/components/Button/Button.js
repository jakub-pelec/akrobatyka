import React from "react";
import "./Button.scss";

export const Button = ({ onClick, active, children }) => {
    return (
        <button
            className={`custom-button ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
