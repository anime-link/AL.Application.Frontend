import React from "react";
import "./styles.css";

export function CamposLogin({ placeholder, type }) {
    return(
        <div className="login-campos">
            <input 
                className="login-input"
                id="login-label"
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}