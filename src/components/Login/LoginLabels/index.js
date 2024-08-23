import React from "react";
import "./styles.css";

export function CamposLogin({ title, placeholder, type }) {
    return(
        <div className="login-campos">
            <label
                className="login-label"
                htmlFor="login-label"
            >
                {title}
            </label>
            <input 
                className="login-input"
                id="login-label"
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}